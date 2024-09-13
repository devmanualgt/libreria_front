import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { Book } from '../../../interfaces/all-books.interface';
import { AuthService } from '../../../services/auth-service.service';
import { BookCardComponent } from "../book-card/book-card.component";
import NewBookComponent from "../../new-book/new-book.component";

@Component({
  selector: 'app-book-information',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, BookCardComponent, NewBookComponent],
  template: `
<app-header></app-header>
<div class="pt-3">
  <h2 class="mb-2 text-center">New Book</h2>

  <div class="container d-flex justify-content-end">
    <a  class="btn btn-danger" href="/welcome"><i class="bi bi-arrow-left-circle"></i> Regresar</a>
  </div>



    <!-- <div class="mb-3">
      <label for="type_user" class="form-label">TypeUser</label>
      <select formControlName="type_user"
        class="form-select" id="type_user" required>
        <option selected disabled value="">Choose...</option>
        <option value="1">Admin</option>
        <option value="2">Gerente</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid state.
      </div>
      <div class="validacion" *ngIf="newUserForm.get('type_user')?.hasError('required') &&  newUserForm.get('type_user')?.touched" >Tipo de usuario obligatorio</div>

    </div> -->
  

</div>



`,
  
})

export default class BookInformationComponent {
  route: ActivatedRoute = inject(ActivatedRoute);


  books: any[] = [];
  book?: any;

 

  constructor(private authService: AuthService) {
    
    this.authService.getAllBooks().subscribe({
      next: (response) => {
        this.books = response;
        const bookId = parseInt(this.route.snapshot.params['id'], 10);
        // this.book = this.books.find(book => book.id === bookId);
        
        const foundBook = this.books.find(book => book.id === bookId);

        if (foundBook) {
          const { title, author, isbn, publish_year, copies, quantity, topics } = foundBook;
          this.book = { title, author, isbn, publish_year, copies, quantity, topics };
        }
        // console.log(this.book);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }



}
