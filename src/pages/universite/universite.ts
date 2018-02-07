import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SchoolService} from "../../services/schoolservice.service";
import {MapPage} from "../map/map";

@Component({
  selector: 'page-universite',
  templateUrl: 'universite.html'
})
export class UniversitePage {

  universities : any;
  schools: any;

  constructor(public navCtrl: NavController, public schoolService: SchoolService) {

    this.schoolService.getSchools()
      .then(data => {
        this.universities = data;
        console.log(this.universities.features)
        this.schools = this.universities.features
        console.log(this.schools)
      })




  }


  getMapAction(lat,long,name){

    this.navCtrl.push(MapPage,{

      latitude : lat,
      longitude: long,
      name: name

    })

  }

}
