import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: Array<{title: string, link:string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        title: 'E-mail',
        icon: 'mail',
        link: 'mailto:srini85@gmail.com',
        note: ''
      },
      {
        title: 'Facebook',
        icon: 'logo-facebook',
        link: 'https://facebook.com/srini.vasudevan',
        note: ''
      },
      {
        title: 'LinkedIn',
        icon: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/sriniv85/',
        note: ''
      },
      {
        title: 'GitHub',
        icon: 'logo-github',
        link: 'https://github.com/srini85',
        note: ''
      },
      {
        title: 'Stack Overflow',
        icon: 'ios-bug',
        link: 'https://stackoverflow.com/users/1670305/srini',
        note: ''
      },
      {
        title: 'Twitter',
        icon: 'logo-twitter',
        link: 'https://twitter.com/sriniv85',
        note: ''
      },
    ];
  }

  itemTapped(event, item) {
    window.open(item.link, '_system');
  }
}
