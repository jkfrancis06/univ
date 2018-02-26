import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SchoolService} from "../../services/schoolservice.service";
import {DetailsPage} from "../details/details";
import { LoadingController } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';


@Component({
  selector: 'page-universite',
  templateUrl: 'universite.html'
})
export class UniversitePage implements OnInit{

  univ: any[];
  showLoader: boolean = true;
  loader: any;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public schoolService: SchoolService) {

  }

  ngOnInit(){
    this.presentLoading()

    this.schoolService.getUniv().subscribe(
      universities => {
        this.univ = universities;
        this.loader.dismiss();
        console.log(this.univ);
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
