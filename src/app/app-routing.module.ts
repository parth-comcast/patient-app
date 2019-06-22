import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing';
import { PatientConditionComponent } from './patient-condition/patient-condition';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'patientCondition/:id', component: PatientConditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
