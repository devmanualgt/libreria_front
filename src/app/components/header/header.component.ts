import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { RouterModule } from '@angular/router';
import { AuthFacadeServiceService } from '../../services/auth-facade-service.service';
import { UserInformation } from '../../interfaces/facade-user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentUser: UserInformation | undefined;
  user: UserInformation | null = null;

  constructor(
    private authService: AuthService,
    public authFacade: AuthFacadeServiceService
  ) {}

  async ngOnInit() {
    //this.currentUser = await this.authFacade.getProfile();

    this.authFacade.getProfile().subscribe((userInfo) => {
      this.user = userInfo;
    });
  }

  logout() {
    // this.authService.logout();
    this.authFacade.logout();
  }
}
