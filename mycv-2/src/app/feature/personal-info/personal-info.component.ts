import { Component } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  title: string = "Personal-Info";
  person: Person = new Person(
    "Matt Damon",
    "Matt Damon",
    "123-456-7894",
    "testdamon@mdamon.com"
  );
}
