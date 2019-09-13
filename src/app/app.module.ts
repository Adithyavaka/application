import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfViewComponent } from './self-view/self-view.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PayrollComponent } from './payroll/payroll.component';
import { DocumentsComponent } from './documents/documents.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    SelfViewComponent,
    PersonalDetailsComponent,
    PayrollComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    // HttpClient,
    HttpClientModule,MatButtonModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
