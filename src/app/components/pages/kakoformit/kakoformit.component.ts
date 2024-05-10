import { Component } from '@angular/core';

@Component({
  selector: 'app-kakoformit',
  standalone: true,
  imports: [],
  templateUrl: './kakoformit.component.html',
  styleUrl: './kakoformit.component.scss'
})
export class KakoformitComponent {
 ss='just'
 close(){
  this.ss='cs'
 }
}
