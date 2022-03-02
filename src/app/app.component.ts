import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scroll = document.documentElement.scrollTop;
  }

  directToOverview(): void {

  }

  directToEducation(): void {

  }

  directToProfile(): void {

  }

  directToWorkExp(): void {

  }

  directToCerfiticate(): void {

  }

  onContactMe(): void {

  }

}
