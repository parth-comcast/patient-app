import { Component, OnInit, Input } from '@angular/core';

import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.html',
  styleUrls: ['./patient-info.scss']
})
export class PatientInfoComponent implements OnInit {
  @Input() public patientList: any [];
  public patientData: any [] = [];

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    console.log(this.patientList);
    this.patientList.forEach(patientResource => {
        const officialName = patientResource.resource.name.find((name: any) => name.use === 'official');
        this.patientData.push({
          name: this.getName(officialName),
          dob: patientResource.resource.birthDate || '-',
          gender: patientResource.resource.gender || '-',
          id: patientResource.resource.id
        });
      });
  }

  public getName(name: any): string {
    let fullname = '';
    if (name.prefix) {
      fullname = name.prefix.join(' ');
    }

    if (name.given) {
      fullname = fullname + ' ' + name.given.join(' ');
    }

    if (name.family) {
      fullname = fullname + ' ' + name.family.join(' ');
    }
    console.log(fullname);
    return fullname;
  }
}
