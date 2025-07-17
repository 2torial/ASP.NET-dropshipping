# Internet Dropshipping Store ASP.NET Project
This is a back-end oriented project written in C# using ORM library to connect to PostgreSQL database. \
Front-end was built from scratch using React.js library to fit the purpose. \
\
<img alt="witryna" src="https://github.com/user-attachments/assets/c75e43de-9a89-44de-b1e6-59d1487a2376" />
<img alt="rejestracja" src="https://github.com/user-attachments/assets/17e0224a-ad2b-4f68-aa7d-9fa00705f46c" /> \
<img alt="baza-dostawcy" src="https://github.com/user-attachments/assets/bbed902b-19c5-474e-8c8c-7e670b42decd" />
<img alt="uml-baza-dostawcow" src="https://github.com/user-attachments/assets/dfd40320-429d-4ca9-9cb1-7b67d5d5297b" />

## Milestones

All expected features has been implemented, current work revolves around fixing bugs and upgrades. \
✅ Searchbar \
✅ Filters \
✅ Categories \
✅ User registration and authorization \
✅ Page size and page select \
✅ Product ordering and basket \
✅ Order summarization \
✅ Order review \
✅ Fluent validation \
✅ Product view page \
✅ UI changes \
✅ Proper JWT handling \
✅ Server-side test enviornment
⏳ Integration tests
⏳ Test automatization (GitHub Actions + Docker)

## Technologies Used
- ASP.NET Core 8
- PostgreSQL Database (local, set up through EF migration)
- React, JSX
- CSS, TypeScript

### Other Tools Incorporated (with required NuGet packages)
- Entity Framework
  - Microsoft.EntityFrameworkCore
  - Microsoft.EntityFrameworkCore.Tools
  - Npgsql.EntityFrameworkCore.PostgreSQL
- Fluent Validation
  - FluentValidation
  - FluentValidation.AspNetCore
- JSON Web Token
  - Microsoft.AspNetCore.Authentication.JwtBearer
- React Router
- Vite

### Testing and CI/CD
Carried out using NUnit and GitHub Actions (Docker).

### Set Up
Project requires to Add-Migration, Update-Database through Entity Framework to work if it's run for the first time (database is going to be named *Store*).
Program requires the user to input correct database login and password in the appsettings.config file to run. 
There are two preset site accounts: user (password: user) and root (password: root), along other mockup data included.

## Contributors
Daniel Boguszewski
