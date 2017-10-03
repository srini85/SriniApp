import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

@Injectable()
export class AuthProvider {
  isAuthenticated:Boolean;
  isAdmin:Boolean;
  adminSubscription;
  userProfile: any = null;
  
  constructor(public http: Http, private afAuth: AngularFireAuth,  private fb: Facebook, private gp: GooglePlus, private platform: Platform, private db: AngularFireDatabase) {
    
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
      } else { 
        this.userProfile = null; 
      }
    });

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
    var currUser = this.db.object('users/' + uid);
    this.adminSubscription = currUser.subscribe(queriedUser => { 
      if (queriedUser == null)
        return;
      
      if (queriedUser.role == 'admin')
          this.isAdmin = true;
    }); 
  }

  signInWithGoogle() {
    if (this.platform.is('cordova')) {
      this.gp.login({
        'webClientId': '337004395697-sv828sdknt8c18f51g5r047agm52ipiu.apps.googleusercontent.com',
        'offline': true
      })
      .then( res => {
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(success => console.log("Firebase success: " + JSON.stringify(success)));
      }).catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
    } else {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        console.log("res: " + res);
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      }).catch(err => {
        console.log("We got an error");
        console.log(err);
      });
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
