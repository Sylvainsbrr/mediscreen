[![forthebadge](https://forthebadge.com/images/badges/made-with-java.svg)](https://forthebadge.com)


# mediscreen
Mediscreen specializes in detecting risk factors for disease

## Technologies
- Java 11
- Spring Boot 2.5.13
- Angular 13

Installing the app with docker
------------------------------

-Install Java and maven Globally  
-Install @angular/cli and nodejs and docker globally 

In mediscreen/frontmediscreen:

-Execute command : npm install -g @angular/cli  
-Execute command : npm install  
-Execute command: ng build --configuration production  

In mediscreen/patient :  
-Execute comand: mvn clean install  

In mediscreen/notemediscreen :  
-Execute comand: mvn clean install  

In mediscreen/report :  
-Execute comand: mvn clean install  

-In the root directory of the project /mediscreen:

Execute comand : "docker-compose up -d"  in the project root
 
 Go to http://localhost:8080/
 
Installing the app locally with each repositories
-------------------------------------------------

Repositories:  

You will need to install MySQL and create a database with the name "patient"  

You will need to install MongoDB with Angular and Nodejs  

For each back-end services :

In mediscreen/patient :  
-Execute comand: mvn spring-boot:run    

In mediscreen/notemediscreen :  
-Execute comand: mvn spring-boot:run   

In mediscreen/report :  
-Execute comand: mvn spring-boot:run   

For the mediscreen/frontmediscreen
-Execute comand : "npm install"   
-Execute comand : "npm start"   

 Go to http://localhost:4200/


