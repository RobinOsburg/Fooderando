import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketComponent } from '../basket/basket.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.scss'],
  
})
export class MainSideComponent implements OnInit {

  salads: any;
  bowls:any;
  drinks:any;
  desserts:any;
  basketItems: any[] = [];
  showFiller = false;

  constructor(public dialog: MatDialog,private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/salads.json').subscribe(data => {
      this.salads = data;
    });

    this.http.get('assets/bowls.json').subscribe(data => {
      this.bowls = data;
    });

    this.http.get('assets/desserts.json').subscribe(data => {
      this.desserts = data;
    });

    this.http.get('assets/drinks.json').subscribe(data => {
      this.drinks = data;
    });
  }

  addToBasket(item: any) {
    const index = this.basketItems.findIndex((i) => i.name === item.menuName);
    if (index > -1) {
      this.basketItems[index].quantity++;
    } else {
      const basketItem = {
        name: item.menuName,
        price: item.price,
        quantity: 1
      };
      this.basketItems.push(basketItem);
    }
  
    // this.dialog.open(BasketComponent, {
    //   data: {
    //     items: this.basketItems
    //   }
    // });
  }

  openBasket(){
    this.dialog.open(BasketComponent, {
      data: {
        items: this.basketItems
      }
    });
  }
}
