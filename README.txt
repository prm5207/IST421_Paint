# IST421
Author: Patrick
GIT UPDATED ON: 9/14/18
// = comments

//This document include a list of commands to get this MEAN stack applciation running.

//Need to install dependincies
sudo apt-get update
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install npm

//Check Versions
nodejs -v
npm -v
git --version

//Set Git information
git config --global user.email "EMAIL ADDRESS"
git config --global user.name "NAME"

//Install nodemon - allows for backend server to be updated without shuting down server
sudo npm install -g nodemon

//Install a text editor - I recommend VS Code
//Open a web browser and download vs code for ubuntu 64bit
//When promted save the file, DO NOT OPEN
In a terminal
cd Downloads
sudo dpkg -i <filename>.deb //Just hit tab when you get to the file name. It will autofill
sudo apt-get install -f
cd /home/<your-name>

//Install angular-cli and ng globaly
sudo npm install -g angular-cli
sudo npm install -g ng-common

//Now clone my git repository from your home directory. In a terminal type pwd to confirm /home/<user-name>
git clone https://github.com/prm5207/IST421.git

//Verify it was cloned
ls

//Geting Everything Working
cd IST421
sudo npm install
cd angular-src
sudo npm install

//OPEN TWO TERMINALS
TERMINAL 1: cd IST421
TERMINAL 1: nodemon //Server should start
TERMINAL 2: cd IST421/angular-src
TERMINAL 2: npm start //Angular should start compiling

now open up a web browser and got to localhost:4200
