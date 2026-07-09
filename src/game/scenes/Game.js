import { Scene } from 'phaser';
import { Player } from '../actor/PlayerActor.js';

export class Game extends Scene
{
    player = null;
    playerXpixel = 0; playerYpixel = 0;
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.setupMap();

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
    setupMap() {

        const map = this.make.tilemap({
            key: 'planetside'
        });
        // First argument is the name inside Tiled. 
        // Second argument is the asset key from Preloader.
        const floorTiles = map.addTilesetImage(
            'floors_tiles',
            'floors'
        );
        const wallTiles = map.addTilesetImage(
            'walls_tiles',
            'walls'
        );

        const groundLayer = map.createLayer(
            'BaseFloorLayer',
            floorTiles
        );
        const wallLayer = map.createLayer(
            'BaseWalls',
            wallTiles
        );

        this.player = new Player(this, this.playerXpixel + UtilClass.SPRITEWIDTH / 2, this.playerYpixel + UtilClass.SPRITEHEIGHT / 2, "engineer_sprites");
        this.initCamera();

    }

    initCamera() {
        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );
        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );
        this.cameras.main.startFollow(this.player, true, 1, 1);
    }

}
