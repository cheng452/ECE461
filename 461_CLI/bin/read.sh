#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No file passed as argument. Usage: $0 <file>"
  exit 1
fi

file=$1

if [ ! -f "$file" ]; then
  echo "File does not exist: $file"
  exit 1
fi

while IFS= read -r line
do
  echo "$line"
done < "$file"




