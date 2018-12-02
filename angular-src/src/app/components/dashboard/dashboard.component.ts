import { Component, OnInit, Input } from '@angular/core';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component'
import { CartService } from 'src/app/services/items.service';
import data from './data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _cartService:CartService) {
    // this.addItem=_cartService.addItem
   }
   brushes = data.brushes
   paintColors = data.paintColors

  ngOnInit() {
  }

  addToCart(item) {
    this._cartService.addItem(item)

  }

}
