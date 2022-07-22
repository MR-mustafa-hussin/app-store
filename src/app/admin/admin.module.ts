import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangeCategoriesComponent } from './components/mange-categories/mange-categories.component';
import { MangeOrdersComponent } from './components/mange-orders/mange-orders.component';
import { MangeUsersComponent } from './components/mange-users/mange-users.component';



@NgModule({
  declarations: [MangeCategoriesComponent,MangeOrdersComponent,MangeUsersComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
