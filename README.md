# extensions

The Twitch **extensions** repo contains the source of the frontend apps that are
rendered within the Twitch app to enrich the viewer experience with additional
information and interactivity:

- [Twitch Extensions](https://dev.twitch.tv/docs/extensions/)

This repo currently contains a single extension: an app that's intended to render
information about the tape that's currently being viewed.

## Prerequisites

- Install [nvm](https://github.com/nvm-sh/nvm) or
  [nvm-windows](https://github.com/coreybutler/nvm-windows)

## Initial setup

1. Run `nvm install $(cat .nvmrc)` to ensure that the required version of Node is
   installed
2. Run `nvm use` to select that version of Node
3. Run `npm install` to install dependencies

## HTTPS for localhost

When [testing in Local Mode](https://dev.twitch.tv/docs/extensions/#develop-your-extension),
Twitch renders our extension in an iframe that loads this URL:

- `https://localhost:8080/video_overlay.html`

Since Twitch is served over HTTPS, it has to load our extension from an HTTPS-enabled
origin as well. This means that we need our Vite development server to be configured
with a valid TLS certificate that our browser will trust.

We use [mkcert](https://github.com/FiloSottile/mkcert) to handle TLS certificates for
local development. In a nutshell, this tool:

- Randomly generates cryptographic key that can be used to sign TLS certificates
- Establishes a certificate authority (CA) identified by that key and installs it into
  the OS-level trust store, so that any certificates signed by that authority will be
  trusted
- Generates a TLS certificate, valid for `localhost`, that's signed by our local CA

Running [`./init-ssl.sh`](./init-ssl.sh) (or [`init-ssl`](./init-ssl.bat) on Windows)
will automatically download and run `mkcert`, then generate `ssl/cert.pem` and
`ssl/key.pem`. These files are loaded in the [Vite config file](./vite.config.ts),
configuring the development server to use HTTPS.

To remove the local CA from the system trust store, run `./init-ssl.sh uninstall` (or
`init-ssl uninstall` on Windows).

## Development

After running the `init-ssl` script for the first time, you can test locally with:

- `nvm use`
- `npm install`
- `npm run dev`

Once running, the development server should serve the overlay extension at
https://localhost:8080/video_overlay.html. You can load this page in a browser, and the
app should be hot-reloaded as you make changes to the code. When running locally,
requests to `/api/*` will be proxied to `https://goldenvcr.com/api/*`.

The only way to test the extension embedded in a Twitch stream is to go live on a
channel that has the extension enabled. When your extension is configured in Local Test
mode, Twitch will configure the overlay iframe to load the very same version of the app
that you're running locally, at `https://localhost:8080/video_overlay.html`.
