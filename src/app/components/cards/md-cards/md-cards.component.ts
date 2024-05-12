import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-md-cards',
  standalone: true,
  imports: [],
  templateUrl: './md-cards.component.html',
  styleUrl: './md-cards.component.scss'
})
export class MdCardsComponent {
  @Input() title:string="Default"
  @Input() soni:number= 0
  @Input() catalog:string= "Default"
  @Input() company:string= "Default"
  @Input() price:number= 0
}
