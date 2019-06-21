import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent implements OnInit {

  public patientIDSelectForm: FormGroup;
  public infoText: string;
  public dropDownValue: string;
  public patientList: any [];

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.patientIDSelectForm = new FormGroup({
      inputValue: new FormControl()
    });
  }

  public onChange(value: string): void {
    this.createLableForInput(value);
  }

  public apiCall(): void {
    // Clearing the Error Info-Text
    this.infoText = '';

    // Format Querey Params to pass Get Patient End Point
    const params: string = this.dropDownValue + '=' + this.patientIDSelectForm.value.inputValue;

    // Subscribe PatientList
    this.dataService.getPatientList(params).subscribe((patientList: any) => {
      this.patientList = patientList.entry;
    });
  }

  // Creates info lable for Input Box
  private createLableForInput(selectedValue: string): void {

    // Clearing the Error Info-Text if you change selection
    this.infoText = '';

    this.dropDownValue = selectedValue;

    if (selectedValue === '_id') {
      this.infoText = 'Please enter the patient\'s Id';
    } else if (selectedValue === 'birthdate') {
      this.infoText = 'Please enter the patient\'s date of birth (E.g: YYYY-DD-MM)';
    } else if (selectedValue === 'name') {
      this.infoText = 'Please enter the patient\'s portion of either family or given name (E.g: Michael)';
    }
    // Note: There is no supported search parameters provided for telecom so i am commenting below line of code
    // else if (selectedValue === 'telecom') {
    //   this.infoText = 'Please enter the patient\'s value in any kind of telecom details (E.g: )';
    // }
  }
}
