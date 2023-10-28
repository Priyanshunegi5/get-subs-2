youtube link -https://youtu.be/3kREIbfjxPA?si=V7aGN-iafDqCAz6p

deployment link -https://get-subs-2.vercel.app/




# 🌐 AlmaBetter Backend Project
<p align="center">
  <a title="license" href="./LICENSE">
    <img src="https://img.shields.io/github/license/Priyanshunegi5/get-subs" alt="license">
  </a>
  <a title="nodejs" href="https://nodejs.org">
    <img src="https://img.shields.io/badge/logo-nodedotjs-blue?logo=nodedotjs" alt="nodejs">
  </a>
  <a title="expressjs" href="https://expressjs.com">
    <img src="https://img.shields.io/badge/logo-expressjs-blue?logo=expressjs" alt="expressjs">
  </a>
  <a title="mongodb" href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/logo-mongodb-blue?logo=mongodb" alt="mongodb">
  </a>
  <a title="mongoosejs" href="https:/mongoosejs.com/">
    <img src="https://img.shields.io/badge/logo-vite-blue?logo=mongoosejs" alt="mongoosejs">
  </a>
</p>







## 🦸‍♂️ About
This is a straightforward backend project that includes a RESTful API designed to provide information about YouTube channel subscribers. The project is built using Node.js and Express, and it utilizes MongoDB as the database to manage subscriber data. The subscriber's data encompasses various fields, including their ID, Names, Subscribed Channels, and Subscription Date.

### The API offers several endpoints
That allow users to retrieve data in JSON format. These endpoints include:

- An endpoint that retrieves a list of all subscribers.
- An endpoint that retrieves a list of subscriber names and their corresponding subscribed channels.
- An endpoint that retrieves detailed information about a subscriber based on their ID.

The project also deals with error situations, as when a user reaches an unidentified endpoint or when the payload is entered incorrectly sended.

###### 👊This project's primary goal is to serve as a foundation for developing a more extensive application.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/logo192.png?raw=true">
      <img alt="GetYoutubeSubscribers" src="./public/logo192.png?raw=true">
  </picture>
</p>

## Table of Contents
- [Major Technologies](#Major-Technologies)
- [Structure](#Structure)
- [Getting Started](#Getting-Started)
- [Repository Branches](#Repository-Branches)
- [Top Contributors](#Top-Contributors)
- [Contributions](#Contributions)
- [Code of Conduct](#Code-of-Conduct)
- [Security Vulnerabilities](#Security-Vulnerabilities)
- [License](#License)

## Major Technologies
- NodeJs
- Mongoose
- ExpressJs

## Structure
```sh
├───public
├───resources
└───src
    ├───database
    ├───models
    └───views
```

## Api Endpoints
To ensure convenience, we will be using the placeholder  `protocol://domain.tld/` as the host URL in the documentation and comments. Please replace it with your actual host URL, such as `http://localhost:5000/,` in the subsequent steps of the documentation.

### Home page
This endpoints will render our beautiful home page.

```sh
# Endpoint
GET     protocol://domain.tld/

```

```sh
# Try Your Self
$ curl -X GET protocol://domain.tld/
```
<img alt="home-page" src="./resources/home-page.png?raw=true">

### Subscribers
This endpoint retrieves an array of all subscribers from the database.

```sh
# Endpoint
GET     protocol://domain.tld/subscribers
```

```sh
# Try Your Self
$ curl -X GET protocol://domain.tld/subscribers
```
<img alt="subscribers" src="./resources/subscribers.png?raw=true">

### Subscriber Names
This api endpoint retrieves an array of subscribers with only two fields: their name and subscribed channel.

```sh
# Endpoint
GET     protocol://domain.tld/subscribers/names
```

```sh
# Try Your Self
$ curl -X GET protocol://domain.tld/subscribers/names
```
<img alt="subscriber-names" src="./resources/subscriber-names.png?raw=true">

### Subscriber By Id
This api endpoint returns the details of the subscriber whose ID is provided in the endpoint.

```sh
# Endpoint
GET     protocol://domain.tld/subscribers/:id
```

```sh
# Try Your Self
$ curl -X GET protocol://domain.tld/subscribers/:id
```
<img alt="subscriber-byid" src="./resources/subscriber-byid.png?raw=true">

### Fallback Endpoint
This endpoint returns an error since we cannot find any matching route with the request.

```sh
# Endpoint
ANY     protocol://domain.tld/{ANY-PATH-WHICH-DOES-NOT-MATCH-WITH-ABOVE-ENDPOINTS}
```

```sh
# Try Your Self
$ curl -X GET protocol://domain.tld/{ANY-PATH-WHICH-DOES-NOT-MATCH-WITH-ABOVE-ENDPOINTS}
```
<img alt="fallback" src="./resources/fallback.png?raw=true">


## Getting Started 🎉
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

###### Hardware requirements
Minimal (dependent on Npm, NodeJs)

###### System Requirements
Ensure your system meets the following requirements:

PACKAGE    | WHY REQUIRED?                        | SITE
-----------|--------------------------------------|-----------------------------
NPM        | Installing npm packages              | [LINK](https://nodejs.org/en/)
NODE       | Running Nodejs                       | [LINK](https://nodejs.org/en/)
ExpressJs  | Web application framework            | [LINK](https://expressjs.com/)
MongoDB    | Storing databases                    | [LINK](https://www.mongodb.com/)
Mongoose   | schema-based solution to model       | [LINK](https://mongoosejs.com/)

#### 💡Prerequisites
We recommend that you have a basic understanding of Node.js

##### Installation

###### Clone Repo
```bash
# Clone the repository
$ git clone https://github.com/Priyanshunegi5/get-subs.git
$ cd get-subs
```

###### Prepare Env
```bash
# Update env file
$ cp .env.example .env

# Update env file According to comments
$ nvim .env
```

###### Prepare Dev Server
```bash
# Install dependency
$ npm install

# Seed database with sample documents
$ node src/createDatabase.js

# Run the dev server
$ npm run dev-start
```

## Repository Branches
- **master** -> any pull request of changes this branch
- **main** -> don´t modify, this is what is running in production

## Top Contributors
[![GitHub Contributors Image](https://contrib.rocks/image?repo=Priyanshunegi5/get-subs)](https://github.com/Priyanshunegi5/get-subs/graphs/contributors)

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
###### Pull Requests
1. Fork the repo and create your branch:
   `#[type]/PR description`
1. Ensure to describe your pull request:
   Edit the PR title by adding a semantic prefix like `Added`, `Updated:`, `Fixed:` etc.
   **Title:**
   `#[issue] PR title -> #90 Fixed styles the button`

## Code of Conduct
In order to ensure that the GetYoutubeSubscribers community is welcoming to all, please review and abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Security Vulnerabilities
If you discover a security vulnerability within GetYoutubeSubscribers, please send an e-mail to Raman Verma via [e-mail](mailto:priyanshunegi3668@gmail.com).
All security vulnerabilities will be promptly addressed.

## License
The GetYoutubeSubscribers is open-sourced software licensed under the [MIT License](./LICENSE)


