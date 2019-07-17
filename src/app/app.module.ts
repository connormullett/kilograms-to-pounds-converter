import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';

import { ConverterServiceService } from './converter-service.service';

import {
    MatToolbarModule,
    MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
    ConverterServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
