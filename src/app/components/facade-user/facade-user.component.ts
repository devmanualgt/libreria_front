import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-facade-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
  <app-header/>
  <section class="container py-5">

    <h2 class="text-center">Mi Estatus</h2>  
    <div class="d-flex justify-content-center py-5">
    
      <div class="card" 
          style="
            width: 18rem;
          
          ">
    
        <div class="card-body">
          <!-- @if (admin) {
            <i class="fa-solid fa-user-tie"></i>
            
          } else{
            <i class="fa-regular fa-user"></i>
          } -->
          
        <i class="fa-regular fa-user"></i>
        <p class="card-title fs-3"><span class="fw-bolder"></span></p>
        <p class="card-text"><span class="fw-bold">Nombre:</span></p>
        <p class="card-text"><span class="fw-bold">Apellido:</span></p>
        <p class="card-text"><span class="fw-bold">Email:</span> </p>
        <p class="card-text"><span class="fw-bold">Username:</span> </p>
        <div class="d-flex justify-content-evenly gap-2">
          <a [routerLink]="['/welcome']" class="btn btn-primary " style="width: 100%;" ><i class="bi bi-arrow-left-circle"></i> Regresar</a>
          <!-- <a  class="btn btn-primary" href="/welcome"><i class="bi bi-arrow-left-circle"></i> Regresar</a> -->
          
        </div>
    
        </div>
      </div>
  
    </div>
  </section>

  
  `
})
export default class FacadeUserComponent {

}
