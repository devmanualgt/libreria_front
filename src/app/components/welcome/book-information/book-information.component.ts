import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute,Router,RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { Book } from '../../../interfaces/all-books.interface';
import { AuthService } from '../../../services/auth-service.service';
import { BookCardComponent } from "../book-card/book-card.component";
import NewBookComponent from "../../new-book/new-book.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { newBook } from '../../../interfaces/new-book';
import { title } from 'process';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-book-information',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    HeaderComponent, 
    BookCardComponent, 
    NewBookComponent,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent
  ],
  template: `
<app-header></app-header>
<div class="py-5">
  <h2 class="mb-2 text-center">Actualizar libro</h2>

  <div class="container d-flex justify-content-end">
    <a  class="btn btn-primary" href="/welcome"><i class="bi bi-arrow-left-circle"></i> Regresar</a>
  </div>

  <section class="container">

    <form [formGroup]="editBookForm" (ngSubmit)="editar()" id="newUserForm"
      class="container pb-2" style="width: 400px; max-width: 100%; ">
      
      <div class="mb-3">
        <label for="title" class="form-label">Titulo</label>
        <input formControlName="title"
         required autocomplete="off"
          type="text" class="form-control" id="title">
      <div class="validacion" *ngIf="editBookForm.get('title')?.hasError('required') &&  editBookForm.get('title')?.touched" >Titulo obligatorio</div>
        
      <div class="mb-3">
        <label for="author" class="form-label">Autor</label>
        <input formControlName="author" required autocomplete="off"
          type="text" class="form-control" id="author">
        <div class="validacion" *ngIf="editBookForm.get('author')?.hasError('required') &&  editBookForm.get('author')?.touched" >Nombre de usuario obligatorio</div>
        
      </div>

      <div class="mb-3">
        <label for="isbn" class="form-label">Isbn</label>
        <input formControlName="isbn" required autocomplete="off"
          type="number" class="form-control" id="isbn">
        <div class="validacion" *ngIf="editBookForm.get('isbn')?.hasError('required') &&  editBookForm.get('isbn')?.touched" >Apellido obligatorio</div>
        
      </div>
      </div>
      <div class="mb-3">
        <label for="publish_year" class="form-label">Año de publicacion</label>
        <input formControlName="publish_year" required
          type="number" class="form-control" id="publish_year">
        <div class="validacion" *ngIf="editBookForm.get('publish_year')?.hasError('required') &&  editBookForm.get('publish_year')?.touched" >Clave obligatorio</div>
      </div>

      <div class="mb-3">
        <label for="copies" class="form-label">Copias</label>
        <input formControlName="copies" required
          type="number" class="form-control" id="copies">
        <div class="validacion" *ngIf="editBookForm.get('copies')?.hasError('required') &&  editBookForm.get('copies')?.touched" >Cantidad de Copias obligatorio</div>
      </div>

      <div class="mb-3">
        <label for="quantity" class="form-label">Cantidad</label>
        <input formControlName="quantity" required
          type="number" class="form-control" id="quantity">
        <div class="validacion" *ngIf="editBookForm.get('quantity')?.hasError('required') &&  editBookForm.get('quantity')?.touched" >Cantidad obligatorio</div>
      </div>

      <div class="mb-3">
        <label for="topics" class="form-label">Temas</label>
        <input formControlName="topics" required
          type="text" class="form-control" id="topics">
        <div class="validacion" *ngIf="editBookForm.get('topics')?.hasError('required') &&  editBookForm.get('topics')?.touched" >Topics obligatorio</div>
      </div>
    
      <div class="d-flex justify-content-end">
        <!-- <a  class="btn btn-primary" href="/welcome">Regresar</a> -->
        <button type="submit"  class="btn btn-primary d-flex gap-2" [disabled]="editBookForm.invalid"><i class="bi bi-person-plus"></i>Editar</button>
    

      </div>
  </form>

  </section>


</div>

<app-footer/>



`,
  
})

export default class BookInformationComponent {
  route: ActivatedRoute = inject(ActivatedRoute);


  books: any[] = [];
  book?: any;
  foundBook? : any;

  editBookForm: FormGroup;


 

  constructor(private authService: AuthService,private fb: FormBuilder, private router: Router) {

    this.editBookForm = this.fb.group({
      title: ['',Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publish_year: ['', Validators.required],
      copies: ['', Validators.required],
      quantity: ['', Validators.required],
      topics: ['', Validators.required],

    });    
    
    this.authService.getAllBooks().subscribe({
      next: (response) => {
        this.books = response;
        const bookId = parseInt(this.route.snapshot.params['id'], 10);
        // this.book = this.books.find(book => book.id === bookId);
        
        this.foundBook = this.books.find(book => book.id === bookId);


        if (this.foundBook) {
          this.editBookForm.patchValue({
            title: this.foundBook.title,
            author: this.foundBook.author,
            isbn: this.foundBook.isbn,
            publish_year: this.foundBook.publish_year,
            copies: this.foundBook.copies,
            quantity: this.foundBook.quantity,
            topics: this.foundBook.topics
          });

          console.log(this.foundBook);

          
        }
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }


  editar(){
    const editedBook: newBook ={
      title: this.editBookForm.value.title??'',
      author: this.editBookForm.value.author??'',
      isbn: this.editBookForm.value.isbn??'',
      publish_year: this.editBookForm.value.publish_year??'',
      copies: this.editBookForm.value.copies??'',
      quantity: parseInt(this.editBookForm.value.quantity??0) ,
      topics: this.editBookForm.value.topics??'',

    }
    // const idBook: string = this.foundBook.idBook;
    this.authService.updateBook(this.foundBook.id, editedBook).subscribe((data) => {
      this.router.navigate(['/welcome']);
      // location.reload();
      // console.log(data);
    });

  
  }



}
