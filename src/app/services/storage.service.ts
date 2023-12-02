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
      // eslint-disable-next-line
      console.error('Error initializing storage:', error);
    }
  }

  private async checkStorageReady() {
    if (!this.isStorageReady) {
      await this.init();
    }
  }

  async setItem(key: string, value: any) {
    this.checkStorageReady();
    await this.storage.set(key, value);
  }

  async getItem(key: string): Promise<any> {
    await this.checkStorageReady();
    return await this.storage.get(key);
  }

  async removeItem(key: string) {
    await this.checkStorageReady();
    await this.storage.remove(key);
  }

  async clear() {
    this.checkStorageReady();
    await this.storage.clear();
  }
}
