import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';

  constructor() {}
  game!: Game;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      
      console.log(this.currentCard);
      console.log(this.game);

      setTimeout(() => {
        if(this.currentCard != undefined)
          this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
