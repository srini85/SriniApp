import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { ToastController } from 'ionic-angular';
import { AddCommentPage } from '../add-comment/add-comment';
import { CommentsProvider } from '../../providers/comments/comments';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  comments;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, 
              private toastCtrl: ToastController, private modalCtrl: ModalController, cp: CommentsProvider) 
  {
    if (!this.canAddComment()) {
      this.toastMessage("You must sign in to add a comment. Use the menu to sign in.");
    }
    this.comments = cp.comments;
  }

  private toastMessage(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  addComment() {
    let modal = this.modalCtrl.create(AddCommentPage);
    modal.present();
  }

  canAddComment() {
    return this.auth.isAuthenticated;
  }
}
