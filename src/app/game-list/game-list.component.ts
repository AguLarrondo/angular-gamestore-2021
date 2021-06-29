import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from './Game'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  games: Game[] = [
    {
      name: 'Terraria',
      genre: 'Sandbox, Survival',
      date: '16 May, 2011',
      price: 129,
      stock: 6,
      image: 'assets/img/terraria.jpg',
      quantity: 0,
    },
    {
      name: 'Tales of Arise',
      genre: 'Action, JRPG',
      date: '9 Sep, 2021',
      price: 3999,
      stock: 0,
      image: 'assets/img/talesofarise.jpg',
      quantity: 0,
    },
    {
      name: 'Dark Souls III',
      genre: 'RPG, Dark Fantasy',
      date: '11 Apr, 2016',
      price: 649,
      stock: 10,
      image: 'assets/img/darksouls3.jpg',
      quantity: 0,
    },
    {
      name: 'Scarlet Nexus',
      genre: 'Action, Adventure, RPG',
      date: '24 Jun, 2021',
      price: 1999,
      stock: 4,
      image: 'assets/img/scarletnexus.jpg',
      quantity: 0,
    },
    {
      name: 'TEKKEN 7',
      genre: 'Fighting, Action, Multiplayer',
      date: '1 Jun, 2017',
      price: 539,
      stock: 10,
      image: 'assets/img/tekken7.jpg',
      quantity: 0,
    },
    {
      name: 'Sea of Thieves',
      genre: 'Adventure, Multiplayer, Open World',
      date: '3 Jun, 2020',
      price: 799,
      stock: 8,
      image: 'assets/img/seaofthieves.jpg',
      quantity: 0,
    },
  ];

  constructor(private cart : GameCartService) {
   }

  ngOnInit(): void {
  }

  addToShopList(game: Game): void{
    this.cart.addToShopList(game);
    game.stock -= game.quantity;
    game.quantity == 0;
  }

}
