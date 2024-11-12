import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrl: './work-exp.component.css'
})
export class WorkExpComponent implements OnInit {
  title: string = "Work-Experience";
  // experience: string = "Apple Inc.";

  // experience: string[] = [
  //   "Apple Inc., 2022 - present",
  //   "PineApple Tech, 2008 - 2022",
  //   "Small start-up, 2004 - 2007"
  // ];
  experience: string[] | undefined;

  ngOnInit(): void {
    this.experience = [
      "Apple Inc., 2022 - present",
      "PineApple Tech, 2008 - 2022",
      "Small start-up, 2004 - 2007"
    ];
  }

  printToConsole(): void {
    console.log("Work Exp Component - printToCosole() Method!")
    console.log("this.experience");
  }
}
