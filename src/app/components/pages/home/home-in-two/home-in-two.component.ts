import { HttpBackend, HttpClient } from '@angular/common/http';
import { Diplom } from './../../../../interfaces/Diplom';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-in-two',
  templateUrl: './home-in-two.component.html',
  styleUrl: './home-in-two.component.scss',
  standalone:true
})
export class HomeInTwoComponent {

  constructor(private http:HttpClient) {}
  
  diploms!: Diplom[];

  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number = 0;
  totalPages: number = 0;
  overflowWidth : string = "";
  cardWidth: string = "";
  containerWidth: number = 0;
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  ngOnInit() {
    this.getAllDiploms()
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }


  getAllDiploms(): void {
    this.http.get<Diplom[]>(`https://localhost:7245/api/Diplom/GetAll?pageIndex=1&size=10`)
      .subscribe(
        (data) => {
          this.diploms = data;
          console.log(data);
        }
      );
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }
}
