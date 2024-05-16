import { jwtDecode } from 'jwt-decode';
import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-md-cards',
  standalone: true,
  imports: [],
  templateUrl: './md-cards.component.html',
  styleUrl: './md-cards.component.scss'
})
export class MdCardsComponent {
  @Input() id:string="id"
  @Input() title:string="Default"
  @Input() soni:number= 0
  @Input() catalog:string= "Default"
  @Input() company:string= "Default"
  @Input() price:number= 0
  @Input() photopath:string=""
  constructor(private http: HttpClient,private router : Router){ }

  addToList(productId: string) {
    var localToken = localStorage.getItem('token');
    if(localToken == null || localToken == '' || localToken == undefined)
    {
      this.router.navigateByUrl('/login')
    }
    const decodedToken: any = jwtDecode(localToken!);
    const wishlistItem: PostWishlist = { productId: productId, userId : decodedToken.UserId};
    this.http.post('https://localhost:7245/api/Wishlist', wishlistItem)
      .subscribe(
        response => {
          console.log('Item added to wishlist:', response);
        },
        error => {
          console.error('Error adding item to wishlist:', error);
        }
      );
  }
}

export interface PostWishlist{
  productId:string,
  userId:string
}