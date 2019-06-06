import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellComponent } from './well/well.component';
import { WellListComponent } from './well-list/well-list.component';

const routes: Routes = [{
    path: 'well',
    component: WellComponent},
    {
      path: 'wellList',
      component: WellListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
