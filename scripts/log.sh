#!/bin/bash

if [[ "$1" == '--' ]]; then shift; fi

##################
##              ##
## LOGGING UTIL ##
##              ##
##################

log(){
  printf "\n ============ \n[LOG]: %s \n \n" "$1"
}


##################
##              ##
## SCRIPT START ##
##              ##
##################

log "rendering variables for GitHub Actions workflow"
for var in "$@"; do
  log "$var"
done
