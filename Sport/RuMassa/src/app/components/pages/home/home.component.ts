import { Component } from '@angular/core';
import { SubscribeComponent } from '../../subscribe/subscribe.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { CardComponent } from '../card/card.component';
import { VoprosiComponent } from '../voprosi/voprosi.component';
import { ConsultationComponent } from '../consultation/consultation.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubscribeComponent, HomeTopComponent, CardComponent, VoprosiComponent, ConsultationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
