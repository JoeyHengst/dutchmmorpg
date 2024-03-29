import * as Phaser from 'phaser';

const buttonRestStyle: Phaser.Types.GameObjects.Text.TextStyle = {
  color: '#FFFFFF'
};

const buttonHoverStyle: Phaser.Types.GameObjects.Text.TextStyle = {
  color: '#7CFC00'
};

const buttonActiveStyle: Phaser.Types.GameObjects.Text.TextStyle = {
  color: '#000000'
};

export class MenuButton extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    onClick?: () => void
  ) {
    super(scene, x, y, text, buttonRestStyle);
    scene.add.existing(this);

    this.setInteractive({ useHandCursor: true })
      .on('pointerover', this.enterMenuButtonHoverState)
      .on('pointerout', this.enterMenuButtonRestState)
      .on('pointerdown', this.enterMenuButtonActiveState)
      .on('pointerup', this.enterMenuButtonHoverState);

    if (onClick) {
      this.on('pointerup', onClick);
    }
  }

  private enterMenuButtonHoverState() {
    this.setStyle(buttonHoverStyle);
  }

  private enterMenuButtonRestState() {
    this.setStyle(buttonRestStyle);
  }

  private enterMenuButtonActiveState() {
    this.setStyle(buttonActiveStyle);
  }
}
