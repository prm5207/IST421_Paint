import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/items.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public items;
  public totalItems;
  public totalPrice=0
  constructor(_cartService: CartService) { 
    this.items=_cartService.getItems()
    this.totalItems=this.items.length;
    this.items.map(item=> this.totalPrice+=item.price)

  }

  ngOnInit() {
  }


}
