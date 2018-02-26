import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {UniversitePage} from "./universite";
import { IonicImageLoader } from 'ionic-image-loader';


@NgModule({
  declarations: [
    UniversitePage,
  ],
  imports: [
    IonicImageLoader,
    IonicPageModule.forChild(UniversitePage),
  ],
})
export class UniversiteModule {}
