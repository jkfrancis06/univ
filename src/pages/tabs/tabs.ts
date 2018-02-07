import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {UniversitePage} from "../universite/universite";
import {HelpPage} from "../help/help";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UniversitePage;
  tab3Root = HelpPage;

  constructor() {

  }
}
