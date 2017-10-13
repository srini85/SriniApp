import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { UserComment } from '../../providers/comments/comment';
import { CommentsProvider } from '../../providers/comments/comments';

@IonicPage()
@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentPage {
  form;
  userName: String;
  @Input() userComment: Text;
  @Input() userRating: Number;
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, 
              private auth: AuthProvider, private cp: CommentsProvider) 
  {
    this.form = new FormGroup({
      userComment: new FormControl(""),
      userRating: new FormControl(0)
    });
    this.userName = this.auth.userProfile.displayName;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addComment() {
    if (this.form.value.userRating == null)
      this.form.value.userRating = 0;

    var comment = new UserComment();
    comment.commentingUser = this.userName;
    comment.rating = this.form.value.userRating;
    comment.time = Date.now();
    comment.reverseTime = -1 * Date.now();
    comment.body = this.form.value.userComment;
    this.cp.addCommment(comment);
    
    this.dismiss();
  }
}
