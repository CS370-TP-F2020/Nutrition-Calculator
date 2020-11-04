# Nutrition-Calculator

# Description
Our project is a recipe nutrition tracker. The user will input each ingredient of a recipe, along with a quantity for each ingredient. Once all ingredients have been entered, the user will be taken to a new page that will show a table listing the nutritional information for each ingredient, along with the combined recipe nutritional information. This API is used to service GET requests to a front end that the user interacts with. Each GET request will query a MongoDB database to return the nutritional facts for a specific food. However, because these GET requests query a MongoDB database, which requires a separate container, the code has been stripped down for this deliverable to simply service JSON POST requests. The server will print the request body to STDOUT using console.log, and return the body of the POST request as a response. The server will listen for POST requests on localhost:3000/food.

# Usage
- To run without docker, you must have Node.js installed with npm, and must cd into 'RESTful API' 
- To install dependencies:
- npm install
- To start server:
- npm start
- To stop server:
- CTRL + C
- Y + Enter


# Docker
- To run with Docker:
- Must have docker installed
- cd into 'restful-API'
- docker build -t node-rest-api .
- docker run --name=api-container -p 3000:3000 -d node-rest-api
- To stop:
- docker stop api-container
- To remove old docker containers:
- docker rm $(docker ps -q -f status=exited)
