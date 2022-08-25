#!/bin/bash

default="sokos-mikrofrontend-template"

echo '**** Setup for sokos-mikrofrontend-template ****'
echo
read -p 'Project name (sokos-xxxx): ' projectName
echo

grep -rl $default --exclude=setupTemplate.sh | xargs -I@ sed -i '' "s|$default|$projectName|g" @