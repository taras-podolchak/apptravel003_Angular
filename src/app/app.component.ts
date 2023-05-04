import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const navbar = this.element.nativeElement.querySelector('.navbar');
    window.addEventListener('scroll', (): void => {
      navbar.classList.toggle('navbar-transparent', window.scrollY < 150);
    });
  }
}
