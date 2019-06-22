import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/core/data.service';

@Component({
    selector: 'app-patient-condition',
    templateUrl: './patient-condition.html',
    styleUrls: ['./patient-condition.scss'],
})
export class PatientConditionComponent implements OnInit {

    public patientConditions: any[];
    public patientName: string;
    public isSortByDate: boolean = false;

    constructor(private dataService: DataService, private route: ActivatedRoute) { }

    public ngOnInit() {
        // Getting Patient ID from URL
        const patientID: string = this.route.snapshot.params['id'];

        // Calling Patient Condition
        this.dataService.getPatientCondition(patientID).subscribe((conditions: any) => {
            if (conditions && conditions.entry) {
                this.patientConditions = conditions.entry.filter((entry: any) => entry.resource.clinicalStatus === 'active');
            }

            this.patientName = this.patientConditions && this.patientConditions[0].resource.patient.display;

            // Baseb on Name of Condition Sort
            this.sortByName();
        });
    }

    // Sorting Date whichaever is latest
    public sortByDate(): any {
        this.isSortByDate = !this.isSortByDate;

        if (this.patientConditions && this.isSortByDate) {
            this.patientConditions = (this.patientConditions.sort((date1, date2) => {
                return new Date(date1.resource.dateRecorded).valueOf() - new Date(date2.resource.dateRecorded).valueOf();
            })).reverse();
        } else {
            this.sortByName();
        }
    }

    public sortByName(): any {
        if (this.patientConditions) {
            this.patientConditions = this.patientConditions.sort((cond1, cond2) => {
                return cond1.resource.code.text.localeCompare(cond2.resource.code.text);
            });
        }
    }
}
