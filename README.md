# Currency_Converter

This is a simple currency converter desktop application using the currencylayer API for real time exchange rates.


# Application Features:

 -  Convert amount from one currency to other
 -  Maintain history for each conversion
 -  MariaDb Database
 -  Communication between Front-end and Back-end through REST-API

# Technologies:

 -  Front-end: AngularJS, HTML, CSS, Bootstrap
 -  Back-end: SpringBoot (JAVA)
 -  Database: MariaDb

# Run instructions

 - Install java
 - Install Mariadb
 - Install IntellijIdea

 
 
 - import maven dependency (auto import)
 
 
 # Database Configuration
   
 - add MariaDb data source in project with the following configuration:
 
  Host: local host   Port: 3306   Database: currency   URL: jdbc:mariadb://localhost:3306/currency
  
  
  # Run application

   press run or debug to start the application

   the application will start on port 8081 and url http://localhost:/8081/#!

   to generate the binary run maven clean build, this will generate binary file in target folder 
