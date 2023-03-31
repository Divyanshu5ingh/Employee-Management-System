How to Run the ABP.IO Project

This document provides instructions for running the ABP.IO project after downloading the code from GitHub.

Prerequisites
  1.Visual Studio 2019 or later
  2.NET 5.0 or later
  3.Microsoft SQL Server
  
Steps to Run the Project
  1.Open the solution file (.sln) in Visual Studio.
  2.Set the DbMigrator project as the startup project.
  3.Run the DbMigrator project to migrate the database.
  4.Set the .Web project as the startup project.
  5.Run the .Web project to start the application.
  
If you encounter any exceptions during the running of the application, it may be due to missing libraries. To install these libraries, follow the steps below:

Open the .Web module in the terminal.
Run the following command:

  abp install-libs
  
  
This command will install the required libraries, and you can then proceed to run the project.


![image](https://user-images.githubusercontent.com/90168140/229070187-47e2bc10-c61b-4ced-b126-80cb51de5852.png)
