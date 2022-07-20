import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '../../services/auth.service';
import { LayoutService } from './../../services/layout.service';

@Component({
  selector: 'wa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  homePath: string = 'home';
  loginPath: string = 'login';
  registerPath: string = 'register';
  user: User | null;
  private subscription: Subscription;

  constructor(private router: Router, private layoutService: LayoutService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public isActive(page: string): boolean {
    return this.router.isActive(page, true);
  }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }

}
