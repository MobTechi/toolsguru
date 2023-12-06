import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AddNoteComponent } from '../../UI/add-note/add-note.component';
import { StorageService } from 'src/app/services/storage.service';
import { formatDate, groupBy, sortByNumber } from 'src/app/utils';
import { ToastService } from 'src/app/services/toast.service';
import * as moment from 'moment';

interface NoteModel {
  date: string;
  sequence: number;
  title: string;
  notes: string;
  expand?: boolean;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent {
  public datetime: string;
  public allNotes: NoteModel[];
  public currentNotes: NoteModel[];
  public highlightedDates!: { date: string; backgroundColor: string }[];

  private readonly DATE_FORMAT = 'YYYY-MM-DD';
  private readonly CALENDER_NOTES_KEY = 'calender_notes';

  constructor(
    private toastService: ToastService,
    private modalService: ModalService,
    private storageService: StorageService
  ) {
    this.currentNotes = [];
    this.allNotes = [];
    this.datetime = moment().toISOString();
    this.updateNotes(true);
  }

  dateChange() {
    this.updateNotes();
  }

  async openModal(note?: NoteModel) {
    if (!note && this.currentNotes.length === 3) {
      this.toastService.presentToast('You can only add three notes per day.');
      return;
    }
    const date = formatDate(this.datetime, this.DATE_FORMAT);
    const { title, notes } = note || {};
    const componentProps = { date, title, notes };
    try {
      const result = await this.modalService.openModal(AddNoteComponent, componentProps);
      switch (result.action) {
        case 'save': {
          if (note) {
            Object.assign(note, { title: result.title, notes: result.notes });
          } else {
            this.allNotes.push({
              date,
              sequence: this.currentNotes.length + 1,
              title: result.title,
              notes: result.notes,
            });
          }
          this.saveNotes();
          this.toastService.presentToast('Notes Added!', true);
          break;
        }
        case 'delete': {
          const deleteIndex = this.allNotes.findIndex((item) => item.sequence === note?.sequence);
          if (deleteIndex >= 0) {
            this.allNotes.splice(deleteIndex, 1);
            await this.saveNotes();
            this.toastService.presentToast('Notes Removed!', false);
          }
          break;
        }
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error opening modal:', error);
    }
  }

  private async saveNotes() {
    await this.storageService.setItem(this.CALENDER_NOTES_KEY, this.allNotes);
    await this.updateNotes(true);
  }

  private async updateNotes(isReload?) {
    await this.getAllNotes(isReload);
    const date = formatDate(this.datetime, this.DATE_FORMAT);
    const groupedNotes = groupBy(this.allNotes, 'date')[date] || [];
    this.currentNotes = sortByNumber(groupedNotes, 'sequence');
  }

  private async getAllNotes(isReload) {
    if (isReload) {
      this.allNotes = (await this.storageService.getItem(this.CALENDER_NOTES_KEY)) || [];
      this.updatehighlightedDates();
    } else {
      this.allNotes = this.allNotes || [];
    }
  }

  private updatehighlightedDates() {
    const allNotesGroup = groupBy(this.allNotes, 'date');
    this.highlightedDates = Object.keys(allNotesGroup).map((key) => ({ date: key, backgroundColor: '#df5663' }));
  }
}
