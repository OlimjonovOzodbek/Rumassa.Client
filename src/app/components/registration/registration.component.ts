import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthsService } from '../../services/auths.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  
  apiUrl = environment.apiUrl;

  constructor(private router : Router,private fb: FormBuilder, private authsService : AuthsService){}

  form!: FormGroup;
  hide = true;


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
    });
  }

  register() {
    if (this.form.invalid || !this.passwordsMatch()) {
      return;
    }

    this.authsService.register(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/login');
        this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']); // Navigate to the home page
          setTimeout(() => {
            window.location.reload(); // Reload the page after a short delay
          }, 10); // Adjust the delay as needed
        });
      },
      error: (err) => {
        console.log(err.error.message);
        alert(err.error.message)
      }
    });
  }

  passwordsMatch(): boolean {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

  googleLogin(): void {
    window.location.href = `${this.apiUrl}Auth/ExternalLogin`;
  }

  facebookLogin(): void {
    window.location.href = `${this.apiUrl}Auth/ExternalLoginCallback`;
  }
}
