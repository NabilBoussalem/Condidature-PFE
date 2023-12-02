import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.getStorage().removeItem("auth");
    this.router.navigateByUrl("/")
  }

}
