import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import {FirebaseProvider} from "../../providers/firebase/firebase";


@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  schools : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {

    this.schools = this.firebaseProvider.getSchools();

    console.log(this.schools)

  }
}
