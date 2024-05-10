import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oplata',
  standalone: true,
  imports: [],
  templateUrl: './oplata.component.html',
  styleUrl: './oplata.component.scss'
})
export class OplataComponent{

  ss='noti'
  close(){
   this.ss='cs'
  }
}
