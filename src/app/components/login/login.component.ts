import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router : Router,private authService : AuthService){}

  tokenKey = "accessToken"
  form!: FormGroup;
  fb = inject(FormBuilder);
  decodedToken: any | null;
  
  login(){
    this.authService.login(this.form.value).subscribe(
      {
        next: (response) => {
          console.log(response);

          this.decodedToken = jwtDecode(localStorage.getItem(this.tokenKey)!)
          if(this.decodedToken.role == 'Admin'){
            console.log(this.decodedToken.role);
            console.log(12)
          }
          else if(this.decodedToken.role == 'User'){
            console.log(this.decodedToken.role);
            console.log(12)

          }}, error: (err) => {
            alert(err.error.message)

          }
          
        });       
      }
      
      ngOnInit(): void {
        console.log("salom")
        this.form = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
        });
      }
}
