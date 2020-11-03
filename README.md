# Nutrition-Tracker

# Description
Our project is a recipe nutrition tracker. The user will input each ingredient of a recipe, along with their quantities. Once all ingredients have been input the user will be taken to a new page that will show a table with the nutritional facts for each ingredient and the total nutrition. 

# Usage
Currently we can only run our system using docker because the database we are using is MongoDB but it is held within the one of our containers. 

# Docker
- To run with Docker:
- Must have docker installed
- cd into repository
- docker-compose build
- docker-compose up
- To stop:
- Ctrl+C
- To remove old docker containers:
- docker rm $(docker ps -q -f status=exited)
