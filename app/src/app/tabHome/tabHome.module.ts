import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from './tabHome.page';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: TabHomePage }])
  ],
  declarations: [
    TabHomePage,
    SearchBarComponent,
  ]
})
export class TabHomePageModule { }
