import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AddTechPage } from '../add-tech/add-tech';
import 'rxjs/add/operator/map';
import { TechnologyProvider } from '../../providers/technology/technology';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  items: Observable<any[]>;
  fullList = [];
  technologies:FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private tp: TechnologyProvider,  
    private modalCtrl: ModalController, private authSvc: AuthProvider) {
    this.initializeList();
  }

  initializeList() {
    this.items = this.tp.getTechnologies();
  }

  getItems(ev) {
    this.initializeList();
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.map(items => {
        return items.filter(item => item.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

  canShowAddTech() {
    return this.authSvc.isAdmin;
  }
}
