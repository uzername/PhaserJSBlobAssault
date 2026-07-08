import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'background').setAlpha(0.5);

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

    }

}
