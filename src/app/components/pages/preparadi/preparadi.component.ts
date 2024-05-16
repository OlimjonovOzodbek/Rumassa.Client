import { ProductModel } from './../../../interfaces/productmodel';
import { Component, OnInit } from '@angular/core';
import { MdCardsComponent } from '../../cards/md-cards/md-cards.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preparadi',
  standalone: true,
  imports: [MdCardsComponent],
  templateUrl: './preparadi.component.html',
  styleUrl: './preparadi.component.scss'
})
export class PreparadiComponent implements OnInit{
  datas!: ProductModel[];
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.http.get<ProductModel[]>("https://localhost:7245/api/Products/GetAll?pageIndex=1&size=10").subscribe((data)=>{
      
    this.datas = data;
    });
  }
}
