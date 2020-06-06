import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';                  //api

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
