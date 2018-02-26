import { Component } from '@angular/core';

import {UniversitePage} from "../universite/universite";
import {HelpPage} from "../help/help";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = UniversitePage;
  tab3Root = HelpPage;

  constructor() {

  }
}
