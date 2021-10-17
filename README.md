# Minimal login api

## this api has 3 main routes

### __Post__ /register

It takes a json data payload of username, password, email and creates a user on mongodb atlas

```sh
curl -d '{"username":"rom","email":"tom@rom.co","password":"apple23"}' -H 'Content-Type: application/json' -X POST http://auth-internship-app.herokuapp.com/register
```

### __GET__ /login

this route is responsible for loging users, it takes a json data payload of username and password

```sh
curl -d '{"username":"romr","password":"apple23"}' -H 'Content-Type: application/json' -X GET http://auth-internship-app.herokuapp.com/login
```

### __POST__ /forgot

this route is used to change user password, this route takes a json payload of email newpassword
```sh
curl -d '{"email":"tomr@rom.co","newpassword":"apsdfsdfple23"}' -H 'Content-Type: application/json' -X POST http://auth-internship-app.herokuapp.com/forgot
```

## Running the project 

### clone the repo

```sh
# clone the repo 
git clone <repoaddres.git>
```

### install dependencies

```sh
npm install
```

### build

```sh
npm run postinstall
```

### starting the project 

```sh
npm start 
```
## live [demo](https://auth-internship-app.herokuapp.com) here