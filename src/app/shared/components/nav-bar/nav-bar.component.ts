import {Component, ElementRef, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    private element: ElementRef,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  isAdmin(): void {
    this.authService.isAdmin();
  }
}
