import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  experiences = [
    { jobTitle: 'CEO', company: 'Apple', duration: '2020 - Present' },
    { jobTitle: 'CFO', company: 'Google', duration: '2018 - 2020' },
  ];
}
