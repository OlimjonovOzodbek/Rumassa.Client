import { Component } from '@angular/core';
import { News } from '../../../interfaces/news';
import { NewsService } from '../../../services/news.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novosti',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './novosti.component.html',
  styleUrl: './novosti.component.scss'
})
export class NovostiComponent {
novosti!:News[]
  pageIndex:number=1
  size:number=10
  
  constructor(private newsService:NewsService){
    this.getall()
  }
  getall(){
    this.newsService.getallNews(this.pageIndex,this.size).subscribe({
      next:(data)=>{
        this.novosti=data
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
