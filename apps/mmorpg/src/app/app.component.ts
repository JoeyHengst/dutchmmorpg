import { Component, OnInit } from '@angular/core';
import { MainMenuScene, GameScene, BootScene } from '@dutch-mmorpg/game';
import * as Phaser from 'phaser';

@Component({
  selector: 'dutch-mmorpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Game instance.
   */
  public game: Phaser.Game;

  /**
   * Game configuration.
   */
  public readonly gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'TEST',
    version: '1.0',
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'gameContainer',
      height: 600,
      width: 600
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 }
      }
    },
    scene: [MainMenuScene, GameScene, BootScene]
  };

  /**
   * Instantiate application component.
   */
  public constructor() {}

  ngOnInit() {
    this.game = new Phaser.Game(this.gameConfig);
  }
}
