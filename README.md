# IST421_Paint
Author: Patrick
GIT UPDATED ON: 9/29/18


This document include a list of commands to get this MEAN stack applciation running on a freash install of unbuntu

###### Need to install dependincies
sudo apt-get update
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install npm

###### Check Versions
nodejs -v
npm -v
git --version

###### Set Git information
git config --global user.email "EMAIL ADDRESS"
git config --global user.name "NAME"

###### Install nodemon - allows for backend server to be updated without shuting down server
sudo npm install -g nodemon


###### Install angular-cli and ng globaly
sudo npm install -g @angular/cli@latest
sudo npm install -g ng-common

###### Now clone my git repository from your home directory. In a terminal type pwd to confirm /home/<user-name>
git clone https://github.com/prm5207/IST421_Paint.git

###### Verify it was cloned
ls

###### Geting Everything Working
cd IST421_Paint
sudo npm install
cd angular-src
sudo npm install

###### OPEN TERMINAL
TERMINAL 1: cd IST421_Paint
TERMINAL 1: nodemon //Server should start

now open up a web browser and got to localhost:8080

When you  run NODEMON. if you get an error that says "nodemon internal watch failed" run the following command:
sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p
