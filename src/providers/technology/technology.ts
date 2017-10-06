import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireOfflineDatabase, AfoListObservable, AfoObjectObservable } from 'angularfire2-offline';
import 'rxjs/add/operator/map';

@Injectable()
export class TechnologyProvider {
  technologies:AfoListObservable<any[]>;
  item: AfoObjectObservable<any>;
  constructor(public http: Http,  public db: AngularFireOfflineDatabase) {
    
  }

  addTechnology(tech: string) {
    var techObj = {
      text: tech
    };
    this.technologies.push(techObj);
  }

  getTechnologies(): AfoListObservable<any[]> {
    this.technologies = this.db.list('technologies', {
      query: {
        orderByChild: 'text'
      }
    });
    return this.technologies;
  }
}
