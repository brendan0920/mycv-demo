import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './feature/personal-info/personal-info.component';
import { WorkExpComponent } from './feature/work-exp/work-exp.component';
import { EducationComponent } from './feature/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    WorkExpComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }