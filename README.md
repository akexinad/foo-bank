# FooBank

## Setup
If you have docker installed, run `npm run docker`. This will spin up a database and app container.

Below are the endpoints that return the list of accounts and transactions based on the account number:
- http://localhost:5000/foobank/accounts
- http://localhost:5000/foobank/transactions/?accountNumber=119168361
- http://localhost:5000/foobank/transactions/?accountNumber=119168361&order=ASC

To run the tests run `npm i && npm run test`. This will also create a test coverage report.

<br>

## Things that I left out
I have left notes around the code base where I feel like I left out functionality. Other things would be:
- Transaction endpoint request parameter validations.
- Comprehensive logging and error handling.
- Depending on business requirements, I could return the currency quantities normalised by using a function similar to the one below:
```javascript
const currencyFormatter = (currency: 'AUD' | 'SGD') => 
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });
```
