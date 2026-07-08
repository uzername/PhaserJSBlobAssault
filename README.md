# PhaserJS game about Blob and Drones

Growing Blob assaulted mining site but Drones are defending it. Player may control either Construction Drone that may build walls and floors or repair structures to stop a Blob or Sentry Drone that may attack Blob fragments.
There are several computer-controlled Drones attempting with a player to stop computer-controlled Blob.
Goal of Blob is to seize control over several mining equipment and communication station. Goal of player is to eradicate Blob and reduce damage to mining facilities


## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`. It uses vite tool to assemble the code

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install`   | Install project dependencies |
| `npm run dev`   | Launch a development web server |
| `npm run build` | Create a production build in the `dist` folder |

## Template Project Structure

We have provided a default project structure to get you started. This is as follows:

| Path                         | Description                                                |
|------------------------------|------------------------------------------------------------|
| `index.html`                 | A basic HTML page to contain the game.                     |
| `public/assets`              | Game sprites, audio, etc. Served directly at runtime.      |
| `public/style.css`           | Global layout styles.                                      |
| `src/main.js`                | Application bootstrap.                                     |
| `src/game`                   | Folder containing the game code.                           |
| `src/game/main.js`           | Game entry point: configures and starts the game.          |
| `src/game/scenes`            | Folder with all Phaser game scenes.                        | 

## Handling Assets

Vite supports loading assets via JavaScript module `import` statements.

This template provides support for both embedding assets and also loading them from a static folder. To embed an asset, you can import it at the top of the JavaScript file you are using it in:

```js
import logoImg from './assets/logo.png'
```

To load static files such as audio files, videos, etc place them into the `public/assets` folder. Then you can use this path in the Loader calls within Phaser:

```js
preload ()
{
    //  This is an example of an imported bundled image.
    //  Remember to import it at the top of this file
    this.load.image('logo', logoImg);

    //  This is an example of loading a static image
    //  from the public/assets folder:
    this.load.image('background', 'assets/bg.png');
}
```

When you issue the `npm run build` command, all static assets are automatically copied to the `dist/assets` folder.

## Deploying to Production

After you run the `npm run build` command, your code will be built into a single bundle and saved to the `dist` folder, along with any other assets your project imported, or stored in the public assets folder.

In order to deploy your game, you will need to upload *all* of the contents of the `dist` folder to a public facing web server.
