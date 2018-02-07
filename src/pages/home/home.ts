import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapPage} from "../map/map";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getMapAction(){

    this.navCtrl.push(MapPage,{

      latitude : 6.19773,
      longitude: 1.20225,
      name: "iaec"

    })

  }

}
