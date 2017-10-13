import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireOfflineDatabase, AfoListObservable } from 'angularfire2-offline';
import 'rxjs/add/operator/map';
import { UserComment } from './comment';

@Injectable()
export class CommentsProvider {
  comments:AfoListObservable<Comment[]>;

  constructor(public http: Http, public db: AngularFireOfflineDatabase) {
    this.loadComments();
  }

  private loadComments() {
    this.comments = this.db.list('comments', {
      query: {
        orderByChild: 'reverseTime',
        limitToFirst: 3
      }
    });
  }

  addCommment(comment: UserComment) {
    this.comments.push(comment);
  }
}
