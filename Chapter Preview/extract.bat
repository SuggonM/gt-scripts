:: dependencies

:: texture-unpacker
:: https://github.com/pavle-goloskokovic/texture-unpacker

@echo off

pushd "C:\UNPACKER_PATH\texture-unpacker"
call npm run unpack "%~dp0%Chapter Preview" json
popd
