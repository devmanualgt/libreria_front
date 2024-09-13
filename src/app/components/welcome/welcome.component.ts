import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/type-user.interface';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Book } from '../../interfaces/all-books.interface';
import { BookCardComponent } from './book-card/book-card.component';
import CarouselComponent from '../carousel/carousel.component';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,
    UserCardComponent, 
    BookCardComponent,
    HeaderComponent, 
    FooterComponent,
    CarouselComponent
  ],
  
    templateUrl: './welcome.component.html',
})
export default class WelcomeComponent implements OnInit{

  usersData: User[] = [];
  booksData: Book[] = [];
  currentUser:any;

  constructor(private AuthService: AuthService){}

  
  ngOnInit(): void{
    this.currentUser = this.AuthService.getCurrentUser();
    // this.getUsers();
    this.getBooks();

  }


  getUsers(){
    this.AuthService.getUsers().subscribe({
      next: (response: User[])=> {
        this.usersData = response;
      },
      error: (error) => {error}
    });

  }
  getBooks(){
    this.AuthService.getAllBooks().subscribe({
      next: (response)=> {
        this.booksData = response;
        // console.log(this.booksData);
      },
      error: (error) => {error}
    });

  }

  // deleteBook(bookId: number){
  //   this.AuthService.deleteBook(bookId);
  // } 

  // getBooks(){
  //   this.AuthService.getAllBooks().subscribe(
  //     (response) => {
  //       // console.log(response);
  //       this.booksData = response;
  //     },
      
  //   );

  // }

  

}