import { Component, NgModule } from '@angular/core';
import { HomeInEightComponent } from './home-in-eight/home-in-eight.component';
import { HomeInFiveComponent } from './home-in-five/home-in-five.component';
import { HomeInFourComponent } from './home-in-four/home-in-four.component';
import { HomeInTwoComponent } from './home-in-two/home-in-two.component';
import { HomeInNineComponent } from './home-in-nine/home-in-nine.component';
import { HomeInOneComponent } from './home-in-one/home-in-one.component';
import { HomeInThreeComponent } from './home-in-three/home-in-three.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeInTwoComponent,HomeInEightComponent,HomeInFiveComponent,HomeInFourComponent,HomeInNineComponent,HomeInOneComponent,HomeInThreeComponent,HomeInTwoComponent,FooterComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
