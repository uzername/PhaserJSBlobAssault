import { Scene } from 'phaser';
import { Player } from '../actor/PlayerActor.js';
import { UtilClass } from '../Utils';
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

        this.map = this.make.tilemap({
            key: 'planetside'
        });
        // First argument is the name inside Tiled. 
        // Second argument is the asset key from Preloader.
        const floorTiles = this.map.addTilesetImage(
            'floors_tiles',
            'floors'
        );
        const wallTiles = this.map.addTilesetImage(
            'walls_tiles',
            'walls'
        );

        const groundLayer = this.map.createLayer(
            'BaseFloorLayer',
            floorTiles
        );
        const wallLayer = this.map.createLayer(
            'BaseWallsLayer',
            wallTiles
        );

        this.player = new Player(this, this.playerXpixel + UtilClass.SPRITEWIDTH / 2, this.playerYpixel + UtilClass.SPRITEHEIGHT / 2, "engineer_sprites");
        this.initCamera();

    }

    checkIsWall(xPixel, yPixel) {
        // TODO port from PHASERJS_project
        return false;
    }
    checkIsStoryNPC(xPixel, yPixel) {
        // TODO port from PHASERJS_project
        return false;
    }

    update(time, delta) {
        this.player.update();
    }

    initCamera() {
        this.physics.world.setBounds(
            0,
            0,
            this.map.widthInPixels,
            this.map.heightInPixels
        );
        this.cameras.main.setBounds(
            0,
            0,
            this.map.widthInPixels,
            this.map.heightInPixels
        );
        this.cameras.main.startFollow(this.player, true, 1, 1);
    }

}
