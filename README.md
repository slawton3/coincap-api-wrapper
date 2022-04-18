## Getting Started
This is an API wrapper client for the CoinCap API found here: https://docs.coincap.io/

## Prerequisites
You will need Node.js as well as the Yarn package manager to install and use this project.

npm
npm install --global yarn


## Installation
Below you will find the instructions to install and start using this client.

## Clone the repo
git clone https://github.com/slawton3/coincap-api-wrapper

## Install YARN packages

cd coincap-api-wrapper

yarn install


## Usage

Modify the src/index.ts file to test out calls to the clients.

yarn start

Public Client: This client is for basic API calls without any data persistence or writing to the database.

Private Client: This client is for persisting data and creating accounts. You can add and remove assets to
each account you create as well as switch between accounts. 

For more examples, please refer to the Documentation

## Testing

To use the Jest test suite for this project, please use the following command:

yarn test

To add or remove tests in this suite, modify the src/test/test.ts file.


## Further Improvements:

Add support for API keys

Change data storage to normalized database with secure authentication.

More validation for inputs to ensure clean requests.

Add functionality to account.

Add more unit testing.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

