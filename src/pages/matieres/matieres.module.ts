import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatieresPage } from './matieres';

@NgModule({
  declarations: [
    MatieresPage,
  ],
  imports: [
    IonicPageModule.forChild(MatieresPage),
  ],
})
export class MatieresPageModule {}
