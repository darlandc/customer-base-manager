import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent
  ],
  exports: [
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ],
})
export class CustomersModule { }
