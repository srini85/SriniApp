import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Azure',
      'C',
      'C++',
      'C#',
      '.NET',
      'ASP.NET',
      'MVC',
      'Elastic',
      'Containers',
      'Docker',
      'Cloud Development',
      'Visual Studio',
      'Android',
      'Ionic',
      'Nginx',
      'SQL',
      'NoSql',
      'IoT',
      'RabbitMq',
      'Microservices',
      'Installshield',
      'Batch',
      'Bash',
      'Shell',
      'Powershell',
      'Octopus',
      'Bamboo',
      'Git',
      'VSS',
      'Clearcase',
      'SVN',
      'HTML',
      'JavaScript',
      'CSS',
      'Angular',
      'Knockout',
      'Polymer'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologyPage');
  }

}
