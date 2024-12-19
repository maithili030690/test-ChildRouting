import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { ProductsdDashboardComponent } from './shared/component/productsd-dashboard/productsd-dashboard.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './shared/component/users-dashboard/user/user.component';
import { UserFormComponent } from './shared/component/users-dashboard/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersDashboardComponent,
    ProductsdDashboardComponent,
    FairsComponent,
    UserComponent,
    UserFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
