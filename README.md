# orders-api

Design and implement an API in Node.js that satisfies the following requirements:

- APIs to create, read, update, and delete a product order
- an order should specify a product, description, submitting user, and submitted date
- persistent storage of orders.
Please make note of any future enhancements or considerations you think might be
relevant.

## Pre-requisites

- Node.js (v22.5.1)
- MongoDB (5.0)
- npm (10.8.2)

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/product-orders-api.git
   cd orders-api

2.Start the DB:

brew services start mongodb/brew/mongodb-community@5.0
brew services list

3.Start the app:

node app.js

4.Interact with the api

use postman to interact with api (see collection in repo orders-api/docs)
