import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SchoolService} from "../../services/schoolservice.service";
import {DetailsPage} from "../details/details";
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-universite',
  templateUrl: 'universite.html'
})
export class UniversitePage implements OnInit{

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

  getItems(ev: any) {
    // Reset items back to all of the items
    this.getSchool();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.univ = this.univ.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
