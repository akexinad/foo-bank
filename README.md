# FooBank

## Setup
If you have docker installed and want to connect to a db, run `npm run db:create`. This will spin up a postgres database.

To run the tests run `npm i && npm start`.

To run the tests run `npm run test`. This will also create a test coverage report.

Below are the endpoints that return the list of accounts and transactions based on the account number:
- http://localhost:3001/foobank/accounts
- http://localhost:3001/foobank/transactions/?accountNumber=119168361
- http://localhost:3001/foobank/transactions/?accountNumber=119168361&order=ASC

<br>

## Things that I left out
I have left notes around the code base where I feel like I left out functionality. Other things would be:
- Transaction endpoint request parameter validations.
- Comprehensive logging and error handling.
- I was hoping to create a node container and run the entire app from within 2 containers but it seems that there are some issues with connecting to postgres using the latest version of node.
- Possible data normalisation for the currency quantities. This will depend on business/design requirements, payload size, performance etc. If further calculations need to made on the client, then it's best to pass the data as a raw number and the formatting to happen on the FE. For that I would use javscript's native `Intl.NumberFormat` and create a function of this nature:

```javascript
const currencyFormatter = (currency: 'AUD' | 'SGD') => 
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });
```
