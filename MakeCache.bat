batch@echo off
echo ================================
echo  PS4 Jailbreak - Cache Generator
echo ================================
echo.

set VERSION=v2.0
set OUTPUT=ps4cache.appcache

echo Generation du cache manifest...
echo.

(
echo CACHE MANIFEST
echo # PS4 Jailbreak Cache %VERSION%
echo # Generated: %date% %time%
echo.
echo CACHE:
for %%f in (*.html) do echo %%f
for %%f in (*.js) do echo %%f
for %%f in (*.css) do echo %%f
for %%f in (*.png) do echo %%f
for %%f in (*.jpg) do echo %%f
for %%f in (*.bin) do echo %%f
echo.
echo NETWORK:
echo *
echo.
echo FALLBACK:
echo / index.html
) > %OUTPUT%

echo.
echo Fichier %OUTPUT% cree avec succes!
echo.
pause