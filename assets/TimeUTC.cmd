@echo off
:: Script creado por: AJwipo
:: 15/05/2022
:: Este script cambia el formato en que windows guarda las fechas.

echo  Generando clave de Registro....
REG ADD "HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /t REG_DWORD /d 1 /f
echo Clave de Registro generada.

sc config w32time start=disabled
echo Formato de hora por defecto desactivado.
pause