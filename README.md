# Nutrition-Tracker

# Description- ROUGH DRAFT, FINISH BEFORE SUBMITTING
Our project is a recipe nutrition tracker. The user will input each ingredient of a recipe, along with their quantities. Once all ingredients have been input the user will be taken to a new page that will show a table with the nutritional facts for each ingredient and the total nutrition. This API is used to service GET requests to the front end. However, because these GET requests query a MongoDB database, which requires a separate container, the code has been stripped down to simply service JSON POST requests. The server will print the request body to STDOUT using console.log, and return the body of the POST request as a response. 

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
- cd into 'RESTful API'
- docker build -t node-rest-api .
- docker run --name=api-container -p 3000:3000 -d node-rest-api
- To stop:
- docker stop api-container
- To remove old docker containers:
- docker rm $(docker ps -q -f status=exited)
