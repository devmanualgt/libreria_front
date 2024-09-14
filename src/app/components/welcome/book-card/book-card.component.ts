import { Component, Input, input } from '@angular/core';
import { Book } from '../../../interfaces/all-books.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-service.service';
import CarouselComponent from '../../carousel/carousel.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="card"
      style="
    width: 18rem;

  "
    >
      <div class="card-body">
        <img
          [src]="book?.link_img"
          [alt]="book?.title"
          style="width: 100%; height: 400px"
        />
        <div>
          <p
            class="card-title fs-3"
            style="height: 100px; display: flex; align-items: center; justify-content: center;"
          >
            <span class="fw-bolder">{{ book?.title }}</span>
          </p>
        </div>
        <p class="card-text">
          <span class="fw-bold">Autor:</span> {{ book?.author }}
        </p>
        <p class="card-text">
          <span class="fw-bold">Temas:</span> {{ book?.topics }}
        </p>
        <p class="card-text">
          <span class="fw-bold">Isbn:</span> {{ book?.isbn }}
        </p>
        <div class="d-flex justify-content-evenly gap-2">
          <a
            [routerLink]="['/details-book', book?.id]"
            class="btn btn-primary"
            style="width: 100%;"
            >Editar</a
          >
          <a
            [routerLink]="['/welcome']"
            class="btn btn-danger"
            style="width: 100%;"
            (click)="deleteBook(book?.id)"
            >Eliminar</a
          >
        </div>
      </div>
    </div>
  `,
})
export class BookCardComponent {
  constructor(private AuthService: AuthService) {}

  // deleteBook(bookId: number){

  //   this.AuthService.deleteBook(bookId);
  // }

  deleteBook(bookId?: number) {
    if (bookId !== undefined) {
      this.AuthService.deleteBook(bookId);
    } else {
      console.error('El ID del libro es indefinido.');
    }
  }

  @Input() book?: Book;
}
