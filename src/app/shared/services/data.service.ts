import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(): Promise<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/testtask`).toPromise();
  }
}
