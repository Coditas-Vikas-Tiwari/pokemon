import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren:()=>import('./custom-modules/auth/auth.module').then(m=>m.AuthModule)},
  {path: 'home', loadChildren:()=>import('./custom-modules/poke/poke.module').then(m=>m.PokeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
