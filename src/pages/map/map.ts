import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  GoogleMapsAnimation
 } from '@ionic-native/google-maps';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map');
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    //this.map = new GoogleMap(this.mapElement, mapOptions);
    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        this.map.addMarker({
            title: 'Srini last checked in here!',
            icon: 'blue',
            animation: GoogleMapsAnimation.BOUNCE,
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          }).then(marker => {
            console.log('marker added');
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                console.log('clicked');
              });
          }).catch(err => {
            console.log(err);
          });
      });
  }
}
