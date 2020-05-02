import { AuthGuard } from './auth.guard';
import { MovieExpansionComponent } from './components/movie-expansion/movie-expansion.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routs: Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'movieExpansion/:id', component: MovieExpansionComponent , canActivate:[AuthGuard]}
]


@NgModule({
 imports:[RouterModule.forRoot(routs)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
