import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { AuthsService } from '../../services/auths.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { FacebookLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private router : Router,private authsService : AuthsService, private socialAuthServiceConfig: SocialAuthService, private http: HttpClient){}

  tokenKey = "token"
  form!: FormGroup;
  fb = inject(FormBuilder);
  decodedToken: any | null;

  apiUrl = environment.apiUrl;
  
  login(){
    this.authsService.login(this.form.value).subscribe(
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
    
    signInWithFacebook(): void {
        this.socialAuthServiceConfig.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
          this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
        });
    }
    
    sendTokenToAPI(provider: string, providerKey: string, email: string, firstName: string, lastName: string, photoUrl: string): void {
      console.log("Well!")
        this.http.post<any>(`${this.apiUrl}Auth/ExternalLogin`, { provider, providerKey, email, firstName, lastName, photoUrl }).subscribe(
          response => {
            if (response.isSuccess) {
              //localStorage.clear();
              localStorage.setItem(this.tokenKey, response.token)
            }
            this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/home']);
                setTimeout(() => {
                window.location.reload();
                }, 1);
            });
          },
          error => {
            console.error('Error sending token', error);
            // Handle error if needed
          }
        );
    }

      
      ngOnInit(): void {
        this.form = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
        });

        this.socialAuthServiceConfig.authState.subscribe((user) => {
          console.log("Worked!");
          this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
        });
      }
}
