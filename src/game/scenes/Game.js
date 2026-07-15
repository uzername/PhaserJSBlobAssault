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

        this.groundLayer = this.map.createLayer(
            'BaseFloorLayer',
            floorTiles
        );
        this.wallLayer = this.map.createLayer(
            'BaseWallsLayer',
            wallTiles
        );
        this.wallPassableLayer2 = this.map.createLayer(
            'BaseWallsPassableLayer2',
            wallTiles
        );
        this.wallPassableLayer = this.map.createLayer(
            'BaseWallsPassableLayer',
            wallTiles
        );                
        this.floorConstructLayer = this.map.createLayer(
            'ConstructFloorsLayer',
            floorTiles
        );
        this.wallConstructLayer = this.map.createLayer(
            'ConstructWallsLayer',
            wallTiles
        );
        this.spawnPoints = this.map.filterObjects("ImportantPoints", obj => obj.name.startsWith( "playerspawn") );
        this.playerXpixel = this.spawnPoints[0].x; this.playerYpixel = this.spawnPoints[0].y;

        this.player = new Player(this, this.playerXpixel + UtilClass.SPRITEWIDTH / 2, this.playerYpixel + UtilClass.SPRITEHEIGHT / 2, "engineer_sprites");
        this.initCamera();

    }

    checkIsWall(xPixel, yPixel) {
        var tileWall = this.wallLayer.getTileAtWorldXY(xPixel, yPixel, true, this.cameras.main);
        var tileWall2 = this.wallConstructLayer.getTileAtWorldXY(xPixel, yPixel, true, this.cameras.main);
        if ((tileWall != null) && (tileWall.index != -1) &&
            ('collides' in tileWall.properties) &&
            (tileWall.properties.collides == true) ||
            (tileWall2 != null) && (tileWall2.index != -1) &&
            ('collides' in tileWall2.properties) &&
            (tileWall2.properties.collides == true)

        ) {
            return true;
        } else {
            return false;
        }
    }
    checkIsStoryNPC(xPixel, yPixel) {
        // TODO port from PHASERJS_project
        return false;
    }

    update(time, delta) {
        this.player.update();
    }

    initCamera() {
        /*
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
        */
        this.cameras.main.startFollow(this.player, true, 1, 1);
    }

}
