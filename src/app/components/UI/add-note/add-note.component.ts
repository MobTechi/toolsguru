import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {

  @Input() date!: string;
  @Input() title!: string;
  @Input() notes!: string;
  public isEdit!: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.isEdit = !!this.title;
  }

  dismiss(action: 'cancel' | 'delete' | 'save') {
    this.modalService.dismissModal({ action, title: this.title, notes: this.notes });
  }
}
