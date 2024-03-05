:: dependencies

:: ImageMagick
:: https://imagemagick.org/

@echo off

magick --version > nul
if errorlevel 1 start notepad %0 & pause & exit /b 1
if "%1" == "" echo Expected directory name as argument %%1. & pause & exit /b 1

set _input=%~n1
set _dir_pre=%_input%/%_input%_unpacked
set _dir_post=%_input%/%_input%_magick
set _search_dir=%_dir_pre%/*

if "%2" NEQ "" set _search_dir=%_dir_pre%/%2

for %%A in (%_search_dir%) do call :img-process %%A

pause
exit /b

:::::::::::::::::::::::::::::::::::::::::::::::::

:img-process
echo.
set art=%~nx1
"%_dir_pre%/%art%"

:map-type
set maptype=
set /p maptype="map-type: "
call :setargs %maptype% || goto map-type

:art-size
set artsize=50
set /p artsize="art-size: "
if "%artsize%" == "b" goto map-type
set /a artsize=%artsize%+100
magick %bgimage% %rotated% -scale %mapsize%! ^( "%_dir_pre%/%art%" -gravity center -resize %artsize%%% ^) ^
 -composite -background none -extent %mapsize% "%_dir_post%/%art%"
"%_dir_post%/%art%"

set cont=
set /p cont="Continue? "
if "%cont%" == "b" goto map-type
if "%cont%" == "" goto art-size
if "%cont%" NEQ "y" goto art-size

>> %_input%/%_input%_magickscale.log (
    echo %art%
    echo %mapsize% : %artsize%%%
    if "%rotated%" == "-rotate 270"  echo rotated : true
    if "%bgimage%" == "postit_2.png" echo bgimage : postit_2.png
    echo.
)

exit /b

:::::::::::::::::::::::::::::::::::::::::::::::::

:setargs
set mapsize=
set rotated=
set bgimage=postit_1.png

if "%2" == "r1"   set "rotated=-rotate 270"
if "%2" == "r2"   set "bgimage=postit_2.png"

if "%1" == ""     set "mapsize=250x200" & exit /b 0
if "%1" == "w"    set "mapsize=250x200" & exit /b 0
if "%1" == "xw"   set "mapsize=300x200" & exit /b 0
if "%1" == "xxw"  set "mapsize=350x200" & exit /b 0
if "%1" == "xxxw" set "mapsize=400x200" & exit /b 0
if "%1" == "h"    set "mapsize=200x250" & exit /b 0
if "%1" == "xh"   set "mapsize=200x300" & exit /b 0
if "%1" == "s"    set "mapsize=200x200" & exit /b 0
if "%1" == "xs"   set "mapsize=250x250" & exit /b 0
if "%1" == "xxs"  set "mapsize=300x300" & exit /b 0
if "%1" == "xws"  set "mapsize=300x250" & exit /b 0
if "%1" == "xhs"  set "mapsize=250x300" & exit /b 0
if "%1" == "xwws" set "mapsize=350x250" & exit /b 0
if "%1" == "xxws" set "mapsize=350x300" & exit /b 0
if "%1" == "xxxs" set "mapsize=350x350" & exit /b 0
if "%1" == "m"    set "mapsize=200x150" & exit /b 0

exit /b 1
