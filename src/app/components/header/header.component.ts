import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  currentUser:any;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout(){
    this.authService.logout();
  }


}


