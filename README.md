[![forthebadge](https://forthebadge.com/images/badges/made-with-java.svg)](https://forthebadge.com)


# mediscreen
Mediscreen specializes in detecting risk factors for disease

## Technologies
- Java 11
- Spring Boot 2.5.13
- Angular

Installing the app with docker
------------------------------

-Install @angular/cli and nodejs and docker globally

-In mediscreen/frontmediscreen/frontmediscreen

-Execute command : npm install -g @angular/cli  
-Execute command : npm install  
-Execute command: ng build --configuration production  

-In the root directory of the project /mediscreen:

Execute comand : "docker-compose up -d"  in the project root
 
 Go to http://localhost:8080/
 
Installing the app locally with each repositories
-------------------------------------------------

Repositories:  
-Front-end: https://github.com/Sylvainsbrr/front-mediscreen  
-noteservice: https://github.com/Sylvainsbrr/notemediscreen  
-patientservice: https://github.com/Sylvainsbrr/patient  
-reportservice: https://github.com/Sylvainsbrr/report  

You will need to install MySQL and create a database with the name "patient"  

You will need to install MongoDB with Angular and Nodejs  

Do a Maven clean and install for each back-end services  

Use comand for each repositories : mvn spring-boot:run  

Execute comand : "npm install"   
Execute comand : "npm start"  

 Go to http://localhost:4200/


