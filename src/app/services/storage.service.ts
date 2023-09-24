import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private isStorageReady = false;

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    try {
      this.isStorageReady = !!(await this.storage.create());
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  private async checkStorageReady() {
    if (!this.isStorageReady) {
      await this.init();
      throw new Error('Storage is not ready. initializing storage');
    }
  }

  async setItem(key: string, value: any) {
    this.checkStorageReady();
    await this.storage.set(key, value);
  }

  async getItem(key: string): Promise<any> {
    this.checkStorageReady();
    return await this.storage.get(key);
  }

  async removeItem(key: string) {
    this.checkStorageReady();
    await this.storage.remove(key);
  }

  async clear() {
    this.checkStorageReady();
    await this.storage.clear();
  }
}
