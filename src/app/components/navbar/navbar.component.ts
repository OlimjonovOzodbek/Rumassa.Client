import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { ToolbarModule } from 'primeng/toolbar';
import { NavbarServiceService } from './navbar-service.service';
import { categoryModel } from '../../interfaces/categoryModel';
import { AuthsService } from '../../services/auths.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImageModule, ToolbarModule, RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  checker = false;
  constructor(private navbarService: NavbarServiceService, private readonly authsService: AuthsService, private router: Router) { }
  ngOnInit(): void {
    // this.getAll()
    this.check()
  }
  categories !: categoryModel[]

  getAll() {
    this.navbarService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
  check() {
    if (this.authsService.isAuthorized() === true) {
      this.checker = true;
    }
    else {
      this.checker = false;
    }
  }
  logout()
  {
    this.authsService.logOut();
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
      setTimeout(() => {
        window.location.reload();
      }, 1);
    });
  }


}
