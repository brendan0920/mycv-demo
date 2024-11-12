import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  name: string = "Brendan";
  address: string = "123 Rector Pl. New York";
  phone: string = "123-456-7896";
  email: string = "test@gmail.com";


}
