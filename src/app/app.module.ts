import { AddComponent } from './customers/add/add.component';
import { ListComponent } from './customers/list/list.component';
import { EditComponent } from './customers/edit/edit.component';
import { CustomerService } from './customers/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig>   = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    AddComponent,
    EditComponent,
    ListComponent,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
