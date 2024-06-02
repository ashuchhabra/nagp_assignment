Project Description:
1. node: This folder contains nodejs application code along with the Dockerfile which is used for running the application.
2. app-files: This folder contains all the yaml files which are needed for the assignment.

Code Repo Link:


Docker Hub URL
https://hub.docker.com/repository/docker/ashuchhabra/node-app/tags

Service API URL to view data from the backend

For backend, I have used NodeJS and postgres as the database.

Below are the endpoints to ensure that external cluster IP is connecting to the node application.

http://35.185.232.245:32080/ready
http://35.185.232.245:32080/healthy
http://35.185.232.245:32080/data

Screen Recording Link: