import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Platform, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage implements OnInit{

  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  private locations:Array<any> = [];
  private long: any;
  private lat: any;
  private name: any;
  showLoader: boolean = true;
  loader: any;

  constructor(private platform:Platform,
              private googleMaps:GoogleMaps,
              private loadingCtrl: LoadingController,
              private params: NavParams) {
    this.long = this.params.get('lat');
    this.lat = this.params.get('long');
    this.name = this.params.get('name');
    this.location = new LatLng(this.lat, this.long);

  }

  ngOnInit(){
    this.presentLoading()
    if (this.loadMap() == 'ok' ){
      this.loader.dismiss()
    }
  }

  loadMap() {


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
    return 'ok'
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

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }


}
