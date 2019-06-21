import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {

    public url: string = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/';

    constructor(private http: HttpClient) { }

    public getPatientList(params: string): Observable<any> {
        return this.http.get<any>(this.url + `Patient?${params}`);
    }
}
