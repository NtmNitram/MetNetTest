import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './COMPONENTS/home/home.component';
import { MoviesComponent } from './COMPONENTS/movies/movies.component';
import { MovieDetailsComponent } from './COMPONENTS/moviedetails/moviedetails.component';

const routes: Routes = [

{ path: '', component: HomeComponent },
{ path: 'movies', component: MoviesComponent },
{ path: 'movies/:id', component: MovieDetailsComponent },
{ path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
