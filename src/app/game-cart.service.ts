import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  private _shopList: Game[] = [];

  shopList : BehaviorSubject<Game[]> = new BehaviorSubject (this._shopList);

  constructor() { }

  addToShopList (game: Game){
    let item: Game | undefined   = this._shopList.find((v1) => v1.name == game.name);
      if (!item){
        this._shopList.push({ ... game});
      } else {
        item.quantity += game.quantity;
      }
      console.log(this._shopList);
      this.shopList.next(this._shopList);
  }

}