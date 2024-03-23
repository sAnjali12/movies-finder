import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MoviesService } from './movies.service';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieSeatsComponent } from './pages/movie-seats/movie-seats.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MatCardModule } from '@angular/material/card';
import { AlertDialogComponent } from './pages/alert-dialog/alert-dialog.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieSeatsComponent,
    PaymentsComponent,
    AlertDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    BrowserAnimationsModule

  ],
  providers: [
    MoviesService,
    TranslateService
  ],
  entryComponents: [
    MovieSeatsComponent,
    PaymentsComponent,
    AlertDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


