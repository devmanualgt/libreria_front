import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewUser } from '../../interfaces/new-user.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth-service.service';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { newBook } from '../../interfaces/new-book';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    HeaderComponent,
    NewBookComponent,
    FooterComponent
  ],
  templateUrl: './new-book.component.html',
  styles: `
    .validacion{
      color: red;
      text-align: end;
    }
  
  `
})
export default class NewBookComponent {

  newUserForm: FormGroup;


  constructor(private AuthService:AuthService, private fb: FormBuilder, private router: Router){
    this.newUserForm = this.fb.group({
      title: ['',Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publish_year: ['', Validators.required],
      copies: ['', Validators.required],
      quantity: ['', Validators.required],
      topics: ['', Validators.required],

    }); 
  }

  // 
  newBook(){
    const newBook: newBook ={
      title: this.newUserForm.value.title??'',
      author: this.newUserForm.value.author??'',
      isbn: this.newUserForm.value.isbn??'',
      publish_year: this.newUserForm.value.publish_year??'',
      copies: this.newUserForm.value.copies??'',
      quantity: parseInt(this.newUserForm.value.quantity??0) ,
      topics: this.newUserForm.value.topics??'',

    }

    this.AuthService.newBook(newBook);
   


    
  }

}
