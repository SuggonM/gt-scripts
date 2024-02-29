:: dependencies

:: texture-unpacker
:: https://github.com/pavle-goloskokovic/texture-unpacker

@echo off


set _UNPACKER_PATH="C:\UNPACKER_PATH\texture-unpacker"


pushd %_UNPACKER_PATH%
if errorlevel 1 start notepad %0 & pause & exit /b 1
call npm run unpack "%~dp0%Chapter Preview" json
popd
pause
