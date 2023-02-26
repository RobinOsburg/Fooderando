import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketComponent } from '../basket/basket.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.scss']
})
export class MainSideComponent implements OnInit {

  salads: any;
  basketItems: any[] = [];

  constructor(public dialog: MatDialog,private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/salads.json').subscribe(data => {
      this.salads = data;
    });
  }

  addToBasket(salads: any) {
    const item = {
      name: salads.menuName,
      price: salads.price
    };

    this.basketItems.push(item);

    this.dialog.open(BasketComponent, {
      data: {
        items: this.basketItems
      }
    });
  }


  openBasket(){
    this.dialog.open(BasketComponent) 
    
  }
}
