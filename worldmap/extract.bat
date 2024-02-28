:: dependencies

:: AssetRipper
:: https://github.com/AssetRipper/AssetRipper
:: texture-unpacker
:: https://github.com/pavle-goloskokovic/texture-unpacker

@echo off

set _input=%~n1

set _AR_DIR=C:\Program Files\AssetRipper
set _AR_APP=%_AR_DIR%\AssetRipper.exe
set _AR_SRC=%_AR_DIR%\Ripped\ExportedProject

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

:: requires a modification in https://github.com/pavle-goloskokovic/texture-unpacker/blob/master/unpacker.ts#L337
::- let outPath = join(filePath, spriteName);
::+ let outPath = join(filePath + "_unpacked", spriteName);

pushd "C:\UNPACKER_PATH\texture-unpacker"
call npm run unpack "%~dp0%_input%" json
popd
