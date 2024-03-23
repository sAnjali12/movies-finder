import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'user', component: UserAuthComponent },
  { path: 'movies', component: MoviesListComponent, canActivate: [AuthGuard]},
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  // { path: '**', redirectTo: '/user' } // Handle invalid routes


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
