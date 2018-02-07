import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MapPage} from "../map/map";

@Component({
  selector: 'page-home',
  templateUrl: 'details.html'
})
export class DetailsPage {

  designation : string;
  latitude: number;
  longitude: number;
  secteur: string;
  type: string;


  constructor(public navCtrl: NavController, private params : NavParams) {

    this.designation = this.params.get('designation');
    this.latitude = this.params.get('latitude');
    this.longitude = this.params.get('longitude');
    this.secteur = this.params.get('secteur');
    this.type = this.params.get('type');

  }

  getMapAction(){

    this.navCtrl.push(MapPage,{

      latitude : 6.19773,
      longitude: 1.20225

    })

  }




}
