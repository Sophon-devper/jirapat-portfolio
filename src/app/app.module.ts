import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExpComponent } from './components/work-exp/work-exp.component';
import { ContactComponent } from './components/contact/contact.component';
import { CerfiticateComponent } from './components/cerfiticate/cerfiticate.component';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ProfileComponent,
    EducationComponent,
    WorkExpComponent,
    ContactComponent,
    CerfiticateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Angular material
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
