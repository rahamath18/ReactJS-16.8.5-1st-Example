## ReactJS Simple Example using following packages

1. ReactJS 16.8.5
2. Babel 6.26.3
3. Webpack 4.39.1
4. https://unpkg.com/

### Step-By-Step Guide

Download node-v10.16.1-win-x64.zip from https://nodejs.org/en/download/

Unzip node-v10.16.1-win-x64.zip

Add following path in Environment Variable's Path, if you have downloaded Node.js Windows Binary (.zip)

	\node-v10.16.1-win-x64\

	\node-v10.16.1-win-x64\node_modules\npm\bin\

Then test following command in command prompt

	node -v

	nmp -v

## With Webpack and Babel

### Create folder 'D:\ReactJS-16.8.5-1st-Example'

### Create  package.json
	D:\ReactJS-16.8.5-1st-Example > npm init -y

### Install react and react-dom packages
	D:\ReactJS-16.8.5-1st-Example > npm install react --save
	D:\ReactJS-16.8.5-1st-Example > npm install react-dom --save

### Install webpack packages (module builder)
	D:\ReactJS-16.8.5-1st-Example > npm install webpack –save
	D:\ReactJS-16.8.5-1st-Example > npm install webpack-dev-server --save
	D:\ReactJS-16.8.5-1st-Example > npm install webpack-cli --save

### Install babel packages
	D:\ReactJS-16.8.5-1st-Example > npm install babel-core --save
	D:\ReactJS-16.8.5-1st-Example > npm install babel-loader --save [OR]  npm install babel-loader@7 --save
	D:\ReactJS-16.8.5-1st-Example > npm install babel-preset-env --save
	D:\ReactJS-16.8.5-1st-Example > npm install babel-preset-react --save
	D:\ReactJS-16.8.5-1st-Example > npm install html-webpack-plugin --save
	D:\ReactJS-16.8.5-1st-Example > npm install babel-cli babel-preset-es2015 --save

### Create following files through commands of refer GitHub URL for source code
	D:\ReactJS-16.8.5-1st-Example > type nul > index.html
	D:\ReactJS-16.8.5-1st-Example > type nul > App.jsx
	D:\ReactJS-16.8.5-1st-Example > type nul > main.js
	D:\ReactJS-16.8.5-1st-Example > type nul > webpack.config.js
	D:\ReactJS-16.8.5-1st-Example > type nul > .babelrc

### Run application
	D:\ReactJS-16.8.5-1st-Example > npm start
	(Browser opens http://localhost:8080/)

### To generate the production build
	D:\ReactJS-16.8.5-1st-Example > npm run build
	goto ...\ReactJS-16.8.5-1st-Example\bundle
