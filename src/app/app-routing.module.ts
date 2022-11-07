import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotheyearComponent } from './pages/gotheyear/gotheyear.component';
import { InitComponent } from './pages/init/init.component';

const routes: Routes = [
  {path:'init', component:InitComponent},
  {path:'statistics', component:GotheyearComponent},
  {path:'**', pathMatch:'full', redirectTo:'init'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
