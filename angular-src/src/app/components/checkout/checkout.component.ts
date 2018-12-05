import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public items;
  public checkoutSuccess=false;
  public totalItems;
  public totalPrice=0
  constructor(_cartService: CartService) { 
    this.items=_cartService.getItems()
    this.totalItems=this.items.length;
    this.items.map(item=> this.totalPrice+=item.price)
  }

  ngOnInit() {
  }

  checkout() {
    this.checkoutSuccess=true;
  }
}
