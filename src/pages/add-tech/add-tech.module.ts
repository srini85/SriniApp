import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTechPage } from './add-tech';

@NgModule({
  declarations: [
    AddTechPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTechPage),
  ],
})
export class AddTechPageModule {}
