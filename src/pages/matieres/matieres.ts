
import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SchoolService} from "../../services/schoolservice.service";

@Component({
  selector: 'page-matieres',
  templateUrl: 'matieres.html'
})
export class MatieresPage implements OnInit{

  ecol: string;
  filiere: string;
  name : string;
  matieres: any;

  constructor(public navCtrl: NavController,
              private params : NavParams,
              private schoolService: SchoolService) {

    this.ecol = this.params.get('ecol');
    this.filiere = this.params.get('filiere');
    this.name = this.params.get('name');

  }

  ngOnInit() {
    this.schoolService.getMatieres(this.ecol, this.filiere).subscribe(
      matieres => {
        this.matieres = matieres;
        console.log(this.matieres)
      }
    );
  }


}
