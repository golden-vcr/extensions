@echo off
setlocal
set MKCERT_VERSION=1.4.4
set MKCERT_FILENAME=mkcert-v%MKCERT_VERSION%-windows-amd64.exe
set MKCERT_BINARY=ssl\%MKCERT_FILENAME%
set MKCERT_URL=https://github.com/FiloSottile/mkcert/releases/download/v%MKCERT_VERSION%/%MKCERT_FILENAME%

if exist %MKCERT_BINARY% goto has_mkcert
if not exist ssl mkdir ssl
curl -L %MKCERT_URL% -o %MKCERT_BINARY%
:has_mkcert

if "%1"=="uninstall" goto uninstall
call %MKCERT_BINARY% -install
if exist ssl/cert.pem goto has_cert
call %MKCERT_BINARY% -key-file ssl/key.pem -cert-file ssl/cert.pem localhost
:has_cert
exit /b 0

:uninstall
call %MKCERT_BINARY% -uninstall
