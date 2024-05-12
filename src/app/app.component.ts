import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObmeniComponent } from './components/pages/obmeni/obmeni.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { PreparadiComponent } from './components/pages/preparadi/preparadi.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavbarComponent, FooterComponent, ObmeniComponent, RegistrationComponent, DashboardComponent, SocialLoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RuMassa';
}
