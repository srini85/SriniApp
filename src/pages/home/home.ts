import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, private authSvc: AuthProvider) {
      authSvc.getAuthUser().subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }

      this.displayName = user.displayName;
    });
  }

  signIn() {
    this.authSvc.signInWithFacebook();
  }
  signOut() {
    this.authSvc.signOut();
  }
}
