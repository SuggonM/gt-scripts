:: dependencies

:: ImageMagick
:: https://imagemagick.org/

@echo off

set _input=%~n1
set _dir_pre=%_input%/%_input%_unpacked
set _dir_post=%_input%/%_input%_magick
set _search_dir=%_dir_pre%/*

if "%2" == "" type nul > %_input%/%_input%_magickscale.txt
if "%2" NEQ "" set _search_dir=%_dir_pre%/%2

for %%A in (%_search_dir%) do call :img-process %%A

exit /b

:img-process
echo.
set A=%~nx1
"%_dir_pre%/%A%"

:map-type
set argm=
set /p argm="map-type: "
if "%argm%" == "" set "mx=250x200" & goto art-size
if "%argm%" == "w" set "mx=250x200" & goto art-size
if "%argm%" == "xw" set "mx=300x200" & goto art-size
if "%argm%" == "xxw" set "mx=350x200" & goto art-size
if "%argm%" == "h" set "mx=200x250" & goto art-size
if "%argm%" == "xh" set "mx=200x300" & goto art-size
if "%argm%" == "s" set "mx=200x200" & goto art-size
if "%argm%" == "xs" set "mx=300x300" & goto art-size
if "%argm%" == "xws" set "mx=300x250" & goto art-size
goto map-type

:art-size
set args=50
set /p args="art-size: "
if "%args%" == "b" goto map-type
set /a args=%args%+100
magick postit_1.png -scale %mx%! ^( "%_dir_pre%/%A%" -gravity center -resize %args%%% ^) -composite -background none -extent %mx% "%_dir_post%/%A%"
"%_dir_post%/%A%"
set cont=
set /p cont="Continue? "
if "%cont%" == "" goto art-size
if "%cont%" == "b" goto art-size
if "%cont%" NEQ "y" goto art-size

>> %_input%/%_input%_magickscale.txt (
    echo %A%
    echo %mx% : %args%%%
    echo.
)

exit /b
