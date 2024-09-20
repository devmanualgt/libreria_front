import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthFacadeServiceService } from '../services/auth-facade-service.service';
import { UserService } from '../services/user-service.service';

//quitar el sugerencia de usuarios, o el autocmpletado
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  loginForm: FormGroup;
  currentUser: any;

  constructor(
    private authFacade: AuthFacadeServiceService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // ngOnInit(): void{
  //   this.currentUser = this.authFacade.getCurrentUser();
  //   console.log(this.currentUser)
  //   // this.getUsers();

  // }

  auth() {
    const username = this.loginForm.value.user ?? '';
    const password = this.loginForm.value.password ?? '';

    this.authFacade.login(username, password);
  }

  // getUsers(){
  //   this.AuthService.getUsers().subscribe({
  //     next: (response)=> {console.log(response)},
  //     error: (error) => {console.log(error)}
  //   });

  // }

  // getTypeUsers(){
  //   this.AuthService.GetTypesUsers().subscribe({
  //     next: (response)=> {console.log(response)},
  //     error: (error) => {console.log(error)}
  //   });

  // }
}
