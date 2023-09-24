#!/usr/bin/env bash
set -e
MKCERT_VERSION="1.4.4"
MKCERT_FILENAME="mkcert-v$MKCERT_VERSION-linux-amd64"
MKCERT_BINARY="ssl/$MKCERT_FILENAME"
MKCERT_URL="https://github.com/FiloSottile/mkcert/releases/download/v$MKCERT_VERSION/$MKCERT_FILENAME"

if [ ! -f $MKCERT_BINARY ]; then
    mkdir -p ssl
    curl -L $MKCERT_URL -o $MKCERT_BINARY
    chmod +x $MKCERT_BINARY
fi

if [ "$1" == "uninstall" ]; then
    $MKCERT_BINARY -uninstall
else
    $MKCERT_BINARY -install
    if [ ! -f ssl/cert.pem ]; then
        $MKCERT_BINARY -key-file ssl/key.pem -cert-file ssl/cert.pem localhost
    fi
fi
