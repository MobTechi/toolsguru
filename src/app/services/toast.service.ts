import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

  // -------------------------------------------------------------------------
  // Dependency Injection

  constructor(private toastController: ToastController) { }

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @function presentToast
   * This Method is used to display the toast
   */

  public async presentToast(
    message: string,
    isSuccess: boolean | null = null,
  ) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      color: isSuccess === null ? 'warning' : (isSuccess ? 'success' : 'danger'),
    });
    toast.present();
    return new Promise((resolve) => {
      toast.onDidDismiss().then((value) => {
        if (value.role === 'cancel') {
          resolve(value);
        }
      });
    });
  }
}
