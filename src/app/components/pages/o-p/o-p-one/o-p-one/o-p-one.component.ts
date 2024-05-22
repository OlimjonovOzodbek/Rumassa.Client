import { Component } from '@angular/core';
import { HomeInNineComponent } from '../../../home/home-in-nine/home-in-nine.component';
import { ProductModel } from '../../../../../interfaces/productmodel';
import { ProductserviceService } from '../../../../../services/productservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-o-p-one',
  templateUrl: './o-p-one.component.html',
  styleUrl: './o-p-one.component.scss',
  standalone: true,
  imports: [HomeInNineComponent]
})
export class OPOneComponent {
  products!:ProductModel[]
  pageIndex:number=1
  size:number=10
  
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
