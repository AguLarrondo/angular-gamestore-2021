import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  shopList$: Observable<Game[]>;

  constructor(private cart : GameCartService) {
    this.shopList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void {
  }

}
