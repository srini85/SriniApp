import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SigninComponent } from '../../components/signin/signin';

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
}
