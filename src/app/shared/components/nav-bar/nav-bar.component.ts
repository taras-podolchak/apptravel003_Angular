import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
