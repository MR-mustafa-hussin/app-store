import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { MangeCategoriesComponent } from './admin/components/mange-categories/mange-categories.component';
import { MangeOrdersComponent } from './admin/components/mange-orders/mange-orders.component';
import { MangeUsersComponent } from './admin/components/mange-users/mange-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MangeCategoriesComponent,
    MangeOrdersComponent,
    MangeUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
