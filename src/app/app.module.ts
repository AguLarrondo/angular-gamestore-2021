import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

import { FormsModule } from'@angular/forms';
import { GamestoreContactComponent } from './gamestore-contact/gamestore-contact.component';
import { GamestoreGamesComponent } from './gamestore-games/gamestore-games.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GamestoreContactComponent,
    GamestoreGamesComponent,
    ShoppingcartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
