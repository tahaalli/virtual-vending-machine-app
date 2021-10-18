# Virtual Vending Machine

## Setup

In the project directory,

1. Run `npm install` to install server dependencies.
2. Run `npm run client-install` to install client dependencies.

## Run

In the project directory,

1. Run In the project directory,npm run server` to start the express server.
2. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Interface

- Use dropdown box to select coin and click on `Deposit` button at the right-hand side of the vending machine.
- Your balance will be updated accordingly in the gray screen.
- Look at the left-hand side of the vending machine and find the slot ID of the desired soda (slot #0 => ID = 0).
- Use button group at the right-hand side of the machine and click on button with desired slot ID.
- It will download `checkout.json` soda file with selected soda data.

## Admin Dashboard

- Click on `ADMIN DASHBOARD` button at the appbar.
- Enter admin auth token to proceed to the dashboard.
  **Token=6BEC23F8C9B40B2DAD43693E5BF8926E0214D88000383E9CFC63050847CF1C1B**

### Restock

- Choose the soda id that you want to restock from the table.
- Enter it in the textbox at the row of `Restock` button.
- Enter the quantity that you want to restock.
- Click on `Restock` button.

### Reprice

- Choose the soda id that you want to reprice from the table.
- Enter it in the textbox at the row of `Reprice` button.
- Enter the new price.
- Click on `Reprice` button.

## API Ref

- PRODUCT ID LIST
  Fizz => fizz
  Pop => pop
  Cola => cola
  Mega Pop => mega_pop

- HTTP GET http://localhost:3001/api/products/
  Fetch all the products data

- HTTP GET http://localhost:3001/api/product/{id}
  Fetch a product by product id

- HTTP GET http://localhost:3001/api/product/checkout/{id}
  Simulate the checkout process by product id, decrease the soda qty and send checkout.json file.

- HTTP PUT http://localhost:3001/api/product/restock/{id}/{quantity}
  Restock the desired product by product id & quantity.

- HTTP PUT http://localhost:3001/api/product/price/{id}/{price}
  Reprice the desired product by product id & price.

- HTTP PUT http://localhost:3001/api/session/balance/{balance}
  Set current balance at the server side by balance.

- HTTP GET http://localhost:3001/api/session/balance
  Fetch the current balance from the server.

- HTTP POST http://localhost:3001/api/session/auth/{token}
  Set the session admin auth token

- HTTP GET http://localhost:3001/api/session/auth
  Fetch the auth result by validating the POSTed token.
