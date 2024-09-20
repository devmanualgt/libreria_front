import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthFacadeServiceService } from '../../services/auth-facade-service.service';

@Component({
  selector: 'app-facade-user',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <section class="container after-header">
      <h2 class="text-center">Mi Perfil</h2>
      <div class="d-flex justify-content-center py-5">
        <div
          class="card"
          style="
            width: 18rem;

          "
        >
          <div class="card-body" *ngIf="user_data">
            <!-- @if (admin) {
            <i class="fa-solid fa-user-tie"></i>

          } else{
            <i class="fa-regular fa-user"></i>
          } -->

            <div class="d-flex justify-content-center">
              <i class="fas fa-user" style="font-size: 100px;"></i>
            </div>
            <p class="card-title fs-3"><span class="fw-bolder"></span></p>
            <p class="card-text">
              <span class="fw-bold">Nombre: {{ user_data.firstName }}</span>
            </p>
            <p class="card-text">
              <span class="fw-bold">Apellido: {{ user_data.lastName }}</span>
            </p>
            <p class="card-text">
              <span class="fw-bold">Email: {{ user_data.email }}</span>
            </p>
            <p class="card-text">
              <span class="fw-bold">Username: {{ user_data.username }}</span>
            </p>
            <div class="d-flex justify-content-evenly gap-2">
              <a
                [routerLink]="['/welcome']"
                class="btn btn-primary "
                style="width: 100%;"
                ><i class="bi bi-arrow-left-circle"></i> Regresar</a
              >
              <!-- <a  class="btn btn-primary" href="/welcome"><i class="bi bi-arrow-left-circle"></i> Regresar</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class FacadeUserComponent {
  user_data: any;
  ngOnInit(): void {
    this.getUser();
  }

  constructor(private authFacade: AuthFacadeServiceService) {}

  async getUser() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '');
    const data = await this.authFacade.getUserById(user.sub);
    if (data['status']) {
      this.user_data = data['records'];
    }

    console.log(this.user_data);
  }
}
