# How to Run the ABP.IO Project
This document provides instructions for running the ABP.IO project after downloading the code from GitHub.

Prerequisites
- Visual Studio 2019 or later
- .NET 5.0 or later
- Microsoft SQL Server

## Steps to Run the Project
- Open the solution file (.sln) in Visual Studio.
- Set the DbMigrator project as the startup project.
- Run the DbMigrator project to migrate the database.
- Set the .Web project as the startup project.
- Run the .Web project to start the application.
- If you encounter any exceptions during the running of the application, it may be due to missing libraries. To install these libraries, follow the steps below:

### Open the .Web module in the terminal.
Run the following command:

    abp install-libs

This command will install the required libraries, and you can then proceed to run the project.
