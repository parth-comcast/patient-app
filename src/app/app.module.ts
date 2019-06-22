import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from 'src/app/app.component';
import { LandingComponent } from 'src/app/landing/landing';
import { PatientInfoComponent } from 'src/app/patient-info/patient-info';
import { PatientConditionComponent } from 'src/app/patient-condition/patient-condition';

import { DataService } from 'src/app/core/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PatientInfoComponent,
    PatientConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
