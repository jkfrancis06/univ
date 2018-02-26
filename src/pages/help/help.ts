import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  schools : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController) {

  }
}
