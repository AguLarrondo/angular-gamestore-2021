import { GamestoreGamesComponent } from './gamestore-games/gamestore-games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamestoreContactComponent } from './gamestore-contact/gamestore-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch:'full' },
  { path: 'games', component : GamestoreGamesComponent },
  { path: 'contact', component : GamestoreContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
