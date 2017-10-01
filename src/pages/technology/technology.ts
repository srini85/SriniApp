import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AddTechPage } from '../add-tech/add-tech';
import 'rxjs/add/operator/map';
import { TechnologyProvider } from '../../providers/technology/technology';

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  items;
  fullList = [];
  technologies:FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public tp: TechnologyProvider,  public modalCtrl: ModalController) {
    this.items = tp.getTechnologies();
  }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologyPage');
  }

  addTech() {
    let modal = this.modalCtrl.create(AddTechPage);
    modal.present();
  }
}
