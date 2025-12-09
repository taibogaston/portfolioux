#!/bin/bash

# Script para asegurar que todos los cambios se suban correctamente

echo "🔍 Verificando estado de git..."
git status

echo ""
echo "📦 Agregando todos los cambios..."
git add -A

echo ""
echo "📝 Verificando cambios a commitear..."
git status

echo ""
read -p "¿Deseas hacer commit? (s/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]]
then
    read -p "Mensaje del commit: " commit_message
    git commit -m "$commit_message"
    
    echo ""
    echo "🚀 Pusheando cambios a origin/master..."
    git push origin master
    
    echo ""
    echo "✅ Verificando que el push fue exitoso..."
    git status
else
    echo "❌ Commit cancelado"
fi

