import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var navLink = document.getElementsByClassName('nav-item');

    if (navLink != null) {
      for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('active');
      }
    }

    var element = document.getElementById('nav-home');
    element?.classList.add('active');
  }

}
