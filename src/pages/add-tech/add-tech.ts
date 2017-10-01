import { Component, Input } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { TechnologyProvider } from '../../providers/technology/technology';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-tech',
  templateUrl: 'add-tech.html',
})
export class AddTechPage {
  form;
  @Input() tech;
  @Input() level;
  constructor(public viewCtrl: ViewController, public tp: TechnologyProvider) {
    this.form = new FormGroup({
      tech: new FormControl(""),
      level: new FormControl("")
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTechPage');
  }

  add() {
    this.tp.addTechnology(this.form.value.tech);
  }
}
