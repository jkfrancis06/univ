import {Component, ElementRef, ViewChild} from '@angular/core';
import {Platform, NavController, NavParams } from 'ionic-angular';

import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  private locations:Array<any> = [];
  private long: any;
  private lat: any;
  private name: any;

  constructor(private platform:Platform, private googleMaps:GoogleMaps, private params: NavParams) {
    this.long = this.params.get('latitude');
    this.lat = this.params.get('longitude');
    this.name = this.params.get('name');
    this.location = new LatLng(this.lat, this.long);

  }

  ionViewDidLoad() {


    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create(element);

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 18,
          tilt: 30
        };


        this.map.moveCamera(options);
        this.addMarker(this.name);
        //setTimeout(() => {this.addMarker()}, 2000);
      });
    });
  }

  addMarker(nom) {
    this.map.addMarker({
      title: nom,
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        });
      });
  }

}
