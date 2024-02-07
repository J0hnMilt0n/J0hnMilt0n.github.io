@echo off

:: Line for changing spotx parameters, each parameter should be separated by a space
set param=-new_theme

set url='https://raw.githubusercontent.com/J0hnMilt0n/J0hnMilt0n.github.io/main/run.ps1'
set url2='https://J0hnMilt0n.github.io/run.ps1'
set tls=[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12;

%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\powershell.exe ^
-Command %tls% $p='%param%'; """ & { $(try { iwr -useb %url% } catch { $p+= ' -m'; iwr -useb %url2% })} $p """" | iex

pause
exit /b