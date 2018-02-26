import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SchoolService} from "../../services/schoolservice.service";
import {MatieresPage} from "../matieres/matieres";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{

  id: string;
  univ:any;
  adress: any;
  filieres: any;

  constructor(public navCtrl: NavController,
              private params : NavParams,
              private schoolService: SchoolService) {

      this.id = this.params.get('id');

  }

  ngOnInit(){
    this.schoolService.loadUniv(this.id).subscribe(
      univ => {
        this.univ = univ;
      }
    );

    this.schoolService.loadUnivAdress(this.id).subscribe(
      adress => {
        this.adress = adress;
      }
    );

    this.schoolService.loadUnivFilieres(this.id).subscribe(
      filiere => {
        this.filieres = filiere;
        console.log(this.filieres);
      }
    );
  }

  showMatieres(filiere){
    this.navCtrl.push(MatieresPage,{
      filiere: filiere,
      ecol: this.id
    })
  }



}
