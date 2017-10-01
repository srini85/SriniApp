import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class TechnologyProvider {
  technologies:FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  constructor(public http: Http,  public db: AngularFireDatabase) {
    
  }

  addTechnology(tech: string) {
    var techObj = {
      text: tech
    };
    this.technologies.push(techObj);
  }

  getTechnologies(): FirebaseListObservable<any[]> {
    this.technologies = this.db.list('technologies', {
      query: {
        orderByChild: 'text'
      }
    });
    return this.technologies;
  }
}
