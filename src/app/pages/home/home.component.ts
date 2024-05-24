import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any;
  searchField: any;
  showResults: boolean = false;
  currency: string = '&euro;';

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
   this.apiService.getProducts().subscribe((data) => {
      console.log('Result - ', data);
      this.products = data;
    })
  }

  searchByKeyword(keyword:string){
    this.apiService.getProductsByKeyword(this.searchField).subscribe((data) => {
      console.log('Result - ', data);
      this.products = data;
      this.showResults = true;
    })
  }

  addToCart(){
    alert('This feature is not available yet!');
  }
}
