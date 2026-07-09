import Phaser from 'phaser'
/// a generic class for game actor
/// https://shakuro.com/blog/phaser-js-a-step-by-step-tutorial-on-making-a-phaser-3-game
/// https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
export class ActorMain extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        
    }
}