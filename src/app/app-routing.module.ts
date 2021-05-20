import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureComponent } from './furniture/furniture.component';
import { MainViewComponent } from './main-view/main-view.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path:'', component: StartComponent},
  { path:'id/:id', component: FurnitureComponent},
  { path:'wszystkie', component: MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
