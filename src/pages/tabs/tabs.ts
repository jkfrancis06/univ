import { Component } from '@angular/core';

import {UniversitePage} from "../universite/universite";
import {HelpPage} from "../help/help";
import {AcceuilPage} from "../acceuil/acceuil";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AcceuilPage;
  tab2Root = UniversitePage;
  tab3Root = HelpPage;

  constructor() {

  }
}
