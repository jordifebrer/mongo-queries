#!/bin/bash
#
# Just a kickoff timer that calls the js scripts every 10 seconds
#

clear
cowsay "kickoff.sh"
echo "running.."
while true
do
    mongo localhost:27017/testing results.js | cowsay > results.txt
    mongo localhost:27017/testing create.js >> /dev/null
    mongofiles -d testing put results.txt >> /dev/null
sleep 10
done
