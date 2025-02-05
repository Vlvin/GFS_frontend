#! /usr/bin/sh

PAGES=$(pwd)'/src/pages'

if [ $# == 1 ]; then
  touch $PAGES'/'$1'.css'
  touch $PAGES'/'$1'.js'
fi
