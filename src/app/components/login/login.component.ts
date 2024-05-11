import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { AuthsService } from '../../services/auths.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router : Router,private authsService : AuthsService, private authService: SocialAuthService, private http: HttpClient){}

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

      signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
          this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
        });
    }
    
    signInWithFacebook(): void {
      console.log("Done!")
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
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
        console.log("salom")
        this.form = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
        });
      }
}
