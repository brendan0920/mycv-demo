import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = [
    { degree: 'Bachelor of Science', institution: 'Harvard', year: '2016' },
    { degree: 'Master of Science', institution: 'M.I.T', year: '2018' },
  ];
}
