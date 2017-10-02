import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Injectable()
export class AuthProvider {
  users:FirebaseListObservable<any[]>;
  isAuthenticated:Boolean;
  isAdmin:Boolean;
  adminSubscription;
  
  constructor(public http: Http, private afAuth: AngularFireAuth,  private fb: Facebook, private platform: Platform, private db: AngularFireDatabase) {
    this.subscribeToAuthStates();
  }

  private subscribeToAuthStates() {
    this.afAuth.authState.subscribe(user => {
      this.isAdmin = false;
      if (!user) {
        this.isAuthenticated = false;
        return;
      }
      this.isAuthenticated = true;
      this.checkIfUserIsAdmin(user.uid);
    });
  }

  private checkIfUserIsAdmin(uid: String) {
    this.users = this.db.list('users', {
      query: {
        orderByChild: 'uid',
        equalTo: uid
      }
    });

    this.adminSubscription = this.users.subscribe(queriesUsers => {
      if (queriesUsers[0].role == 'admin')
          this.isAdmin = true;
    });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.adminSubscription.unsubscribe();
  }

  getAuthUser() {
    return this.afAuth.authState;
  }
}
