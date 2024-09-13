import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  template: `

  <div id="carouselExampleCaptions" class="carousel slide" 
  style="
    height:600px;
    overflow: hidden;
    ">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/img/fondo1.jpg" class="d-block w-100" alt="libros" 
        style="
        object-fit: cover;
        width: 100%;
        height: 100%;
        ">
        <div class="carousel-caption d-none d-md-block"
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        ">
          <h1>Aventuras sin limites</h1>
          <p>Todo lo que vives es una nueva experiencia.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/fondo2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block"
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        ">
        
          <h2>El conocimiento...</h2>
          <p>Es la herramienta para vencer los miedos que te estremecen por la incertidumbre</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/fondo3.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block"
        
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        ">
          <h2>Una recompensa inconmensurable</h2>
          <p>Hay más tesoros en los libros que en todo el botín del pirata de “La isla del tesoro”</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  
  `
})
export default class CarouselComponent {

}
