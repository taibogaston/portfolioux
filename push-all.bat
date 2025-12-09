@echo off
REM Script para asegurar que todos los cambios se suban correctamente en Windows

echo 🔍 Verificando estado de git...
git status

echo.
echo 📦 Agregando todos los cambios...
git add -A

echo.
echo 📝 Verificando cambios a commitear...
git status

echo.
set /p commit_choice="¿Deseas hacer commit? (s/n): "
if /i "%commit_choice%"=="s" (
    set /p commit_message="Mensaje del commit: "
    git commit -m "%commit_message%"
    
    echo.
    echo 🚀 Pusheando cambios a origin/master...
    git push origin master
    
    echo.
    echo ✅ Verificando que el push fue exitoso...
    git status
) else (
    echo ❌ Commit cancelado
)

