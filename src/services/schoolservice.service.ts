import { Injectable } from '@angular/core'
import {University} from "../models/University";
import {Filiere} from "../models/Filiere";
import {Matieres} from "../models/matieres";
import {Adresses} from "../models/Adresses";
import {Observable} from "rxjs/Observable";
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';



@Injectable()

export class SchoolService{

  universities: FirebaseListObservable<University[]>;
  univ: FirebaseObjectObservable<any>;

  adresses: FirebaseListObservable<Adresses[]>
  filieres: FirebaseListObservable<Filiere[]>
  matieres: FirebaseListObservable<Matieres[]>
  homeUniv: FirebaseListObservable<University[]>;

  constructor(public af: AngularFireDatabase) {

    this.universities = this.af.list('/') as FirebaseListObservable<University[]>;

  }

  getUniv() {
    return this.universities;
  }

  getHomeUniv(): FirebaseListObservable<University[]> {
    return this.af.list('/', {
      query: {
        orderByChild: 'acceuil',
        equalTo: 1
      }
    });
  }

  loadUniv(id){
    this.univ = this.af.object('/' + id) as FirebaseObjectObservable<University>;

    return this.univ;
  }

  loadUnivAdress(id){
    this.adresses = this.af.list('/' + id + '/adresses') as FirebaseListObservable<Adresses[]>;
    return this.adresses;
  }

  loadUnivFilieres(id){
    this.filieres = this.af.list('/' + id + '/filieres') as FirebaseListObservable<Filiere[]>
    return this.filieres;
  }
  getMatieres (ecol, id) {
    this.matieres = this.af.list('/' + ecol + '/filieres/' + id + '/matiere' ) as FirebaseListObservable<Matieres[]>;
    return this.matieres;
  }




}

