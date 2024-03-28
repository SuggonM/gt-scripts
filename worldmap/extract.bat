:: This script is for one-time usage on each chapter when setting up the repository...
:: ...thus only applicable when the chapter asset file is directly in /gt-scripts/worldmap/.

:: dependencies

:: AssetRipper
:: https://github.com/AssetRipper/AssetRipper
:: texture-unpacker
:: https://github.com/pavle-goloskokovic/texture-unpacker

@echo off


set _UNPACKER_PATH="C:\UNPACKER_PATH\texture-unpacker"


set _input=%~n1

set _AR_DIR=C:\Program Files\AssetRipper
set _AR_APP=%_AR_DIR%\AssetRipper.exe
set _AR_SRC=%_AR_DIR%\Ripped\ExportedProject

"%_AR_APP%" --version > nul
if errorlevel 1 start notepad %0 & pause & exit /b 1

"%_AR_APP%" "%_input%" -q > nul

xcopy "%_AR_SRC%\Assets\" "_temp\" /E /C /I /Y /Q > nul

mkdir "%_input%_temp"
copy "_temp\Texture2D\%_input%.png" "%_input%_temp\"     > nul
copy "_temp\Texture2D\%_input%_bg.png" "%_input%_temp\"  > nul
copy "_temp\TextAsset\%_input%.json" "%_input%_temp\"    > nul
copy "_temp\TextAsset\%_input%_bg.json" "%_input%_temp\" > nul
move "%_input%" "%_input%_temp\"                         > nul
ren "%_input%_temp" "%_input%"                           > nul
rmdir /S /Q "_temp\"

pushd %_UNPACKER_PATH%
if errorlevel 1 start notepad %0 & pause & exit /b 1
call npm run unpack -- -i "%~dp0%_input%\%_input%" -f json -o "%~dp0%_input%\%_input%_unpacked"
call npm run unpack -- -i "%~dp0%_input%\%_input%_bg" -f json -o "%~dp0%_input%\%_input%_bg_unpacked"
popd
pause
