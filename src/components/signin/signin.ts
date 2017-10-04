import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'signin',
  templateUrl: 'signin.html'
})
export class SigninComponent {
  nextLoginAction: String = "in";
  displayName;
  
  constructor(private authSvc: AuthProvider, private toastCtrl: ToastController) {
    this.checkNextLoginAction();
  }

  loginAction(){
    if (this.nextLoginAction === "in") {
      this.signin();
      return;
    }
    this.signout();
  }

  private signin() {    
    this.authSvc.signInWithGoogle();
  }

  private signout() {
    this.authSvc.signOut();
  }

  private checkNextLoginAction() {
    this.authSvc.getAuthUser().subscribe(user => {
      if (!user) {
        this.nextLoginAction = "in";
        this.displayName = null;
        this.toastMessage('Not signed in. Use the menu to sign in.');
        return;
      }
        this.toastMessage('Welcome ' + user.displayName);
        this.nextLoginAction = "out";
        this.displayName = this.processDisplayName(user.displayName);
    });
  }

  private processDisplayName(fullName: String) : String {
    return fullName.split(' ')[0];
  }

  private toastMessage(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
