import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SchoolService} from "../../services/schoolservice.service";
import {DetailsPage} from "../details/details";
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage implements OnInit{

  univ: any[];
  showLoader: boolean = true;
  loader: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public schoolService: SchoolService) {
  }

  ngOnInit(){
    this.presentLoading()
    this.getSchool()
  }

  getSchool(){
    this.schoolService.getHomeUniv().subscribe(
      universities => {
        this.univ = universities;
        console.log(this.univ)
        this.loader.dismiss();
      });
  }

  loadDetails(id){
    this.navCtrl.push(DetailsPage,{
      id: id
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }


}
