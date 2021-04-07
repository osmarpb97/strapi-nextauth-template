# Strapi authentication with Next.js and NextAuth.js

  <img src="https://user-images.githubusercontent.com/36203999/111043883-bcfa6d00-840a-11eb-9a23-e7da185e7a1f.png" alt="Index page"/>


## About
Implementation of a local authentication system with using Strapi Next.js Framework and NextAuth.

## Table of contents

>   * [About](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Requirements](#requirements)
>   * [Installation](#installation)
>   * [Screenshots](#screenshots)
>   * [License](#license)


## Requirements

- Node.js >= 10.x installed on your machine
- NPM >= 6.x or YARN installed on your machine
- PostgreSQL installed on your machine


## Installation
Install the dependencies of the 2 apps "app, api".  

    cd /app
    yarn install

    cd /api
    yarn install

Now, we will proceed to create a database with postgresql

    sudo -i -u postgres

Once inside our postgres user we run the command

    psql

In order to enter the postgresql bash and create our database as follows

    CREATE DATABASE strapi;
    CREATE ROLE strapiu WITH LOGIN PASSWORD 'strongpassword';
    GRANT ALL PRIVILEGES ON DATABASE strapi TO strapiu;

Now, we close the postgresql bash and the user's session by typing twice exit

    postgres=# exit
    postgres@user:~$ exit

Now start the servers with

```
cd app/ && yarn dev
cd api/ && yarn strapi dev
```

Go to localhost:1337 and create a new admin and user on Strapi

<img src="https://user-images.githubusercontent.com/36203999/113796004-c8903980-9713-11eb-9ed7-3ff24acc761e.png" alt="Index page"/>

Then go to the users section and click on "+Add New User". 

<img src="https://user-images.githubusercontent.com/36203999/113796089-07be8a80-9714-11eb-9970-3ca743b4ed9f.png"/>

Now we put some test data, in this case. I created a Test User with email "test@gmail.com" and a password, then we click on the "Save" button

<img src="https://user-images.githubusercontent.com/36203999/113796148-2b81d080-9714-11eb-9495-1fbcd4105c37.png"/>

Then go to localhost:3000 and test the app with the created user :) 🚀.

Happy coding 🎉!
## Screenshots

  <img src="https://user-images.githubusercontent.com/36203999/111043528-abb06100-8408-11eb-9a47-b4455524b545.png" alt="Index page"/>
  <img src="https://user-images.githubusercontent.com/36203999/111043571-ddc1c300-8408-11eb-9211-588ce2cb71ed.png" alt="Index page user login"/>
  <img src="https://user-images.githubusercontent.com/36203999/111043555-c8e52f80-8408-11eb-834a-ad98abd3c01f.png" alt="Login"/>



## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

