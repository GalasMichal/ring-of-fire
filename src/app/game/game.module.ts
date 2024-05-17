import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameInfoComponent } from '../game-info/game-info.component';

const imports = [
  CommonModule,
  PlayerComponent,
  MatButtonModule,
  MatIconModule,
  GameInfoComponent,
];

@NgModule({
  declarations: [],
  imports: [...imports],
  exports: [...imports],
})
export class GameModule {}
