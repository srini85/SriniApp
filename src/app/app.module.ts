import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { TechnologyPage } from '../pages/technology/technology';
import { AddTechPage } from '../pages/add-tech/add-tech';
import { CommentsPage } from '../pages/comments/comments';
import { AddCommentPage } from '../pages/add-comment/add-comment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AngularFireOfflineModule } from 'angularfire2-offline';

import { TechnologyProvider } from '../providers/technology/technology';
import { AuthProvider } from '../providers/auth/auth';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { SigninComponent } from '../components/signin/signin';
import { Ionic2RatingModule } from 'ionic2-rating';
import { CommentsProvider } from '../providers/comments/comments';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    TechnologyPage,
    AddTechPage,
    CommentsPage,
    AddCommentPage,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireOfflineModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    TechnologyPage,
    AddTechPage,
    CommentsPage,
    AddCommentPage,
    SigninComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TechnologyProvider,
    AuthProvider,
    Facebook,
    GooglePlus,
    CommentsProvider
  ]
})
export class AppModule {}
