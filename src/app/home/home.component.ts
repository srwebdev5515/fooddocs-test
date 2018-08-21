import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  people: Person[] = [];

  constructor(
    private dataService: DataService
  ) { }

  async ngOnInit() {
    this.people = await this.dataService.getPeople();
  }

  archivePerson(person: Person) {
    person.disabled = true;
  }
}
