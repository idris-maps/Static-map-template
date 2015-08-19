##Create static maps with D3

Convert your map into .svg for printing. Actually it works with anything (not animated) you do with D3.

##How to use it

0. You need to have [nodeJS](https://nodejs.org) installed. 

1. Copy this repository

	git clone https://github.com/idris-maps/Static-map-template.git

2. Check if you have watchify installed

	watchify --version

If not, install it (you may need to be su to run this one):

	npm install watchify -g

3. Install the libraries:

	npm install

This will install D3, express (the server so you can see your work in progress in the browser) and node-jsdom (to savethe .svg file)

4. Run the server and watch your scripts for modification

	npm run show

The server runs on port 3000. If you wish to change that you can do so in the 'server.js' file. Check if it works in the browser at http://localhost:3000/ . You should see the word 'template' 

5. Now you can set the size of your desired output in 'lib/config.js' and write your map or graph in 'lib/draw.js'.

6. When you are satisfied with your map, run

	node saveSvg

in the main folder to create a 'map.svg' file.

	
