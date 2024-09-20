import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { RouterModule } from '@angular/router';
import { AuthFacadeServiceService } from '../../services/auth-facade-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  currentUser:any;

  constructor(private authService:AuthService, 
    private authFacade: AuthFacadeServiceService){}

  ngOnInit(): void {
    // this.currentUser = this.authService.getCurrentUser();
  }

  logout(){
    // this.authService.logout();
    this.authFacade.logout()
  }


}


