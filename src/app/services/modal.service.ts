import { Injectable } from '@angular/core';
import { AnimationBuilder, AnimationController, ModalController } from '@ionic/angular';

@Injectable()
export class ModalService {

  constructor(
    private modalCtrl: ModalController,
    public animationCtrl: AnimationController
  ) { }

  public async openModal(component, props, className?, showAnimation = true): Promise<any> {
    const modal = await this.modalCtrl.create({
      component,
      componentProps: props,
      cssClass: className,
      enterAnimation: showAnimation ? this.enterAnimation() : undefined,
      leaveAnimation: showAnimation ? this.leaveAnimation() : undefined
    });
    await modal.present();
    return new Promise((resolve) => {
      modal.onDidDismiss().then((response) => {
        resolve(response.data);
      });
    });
  }

  public async dismissModal(context?) {
    return await this.modalCtrl.dismiss(context);
  }

  public enterAnimation(): AnimationBuilder {
    const enterAnimationContent = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.4);

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ opacity: 1 })
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(800)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }
    return enterAnimationContent;
  }

  public leaveAnimation(): AnimationBuilder {
    const leaveAnimationContent = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.4, 0.01);

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ opacity: 1 })
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }
    return leaveAnimationContent;
  }
}
