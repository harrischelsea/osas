import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAutheticated() {
    return this.authService.isAuthenticated();
  }

  signOut() {
    this.authService.SignOut();
  }

}
