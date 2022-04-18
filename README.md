Getting Started
This is an API wrapper client for the CoinCap API found here: https://docs.coincap.io/

Prerequisites
You will need Node.js as well as the Yarn package manager to install and use this project.

npm
npm install --global yarn


Installation
Below you will find the instructions to install and start using this client.

Clone the repo
git clone https://github.com/slawton3/coincap-api-wrapper

Install YARN packages
yarn install


Usage

Public Client: This client is for basic API calls without any data persistence or writing to the database.

Private Client: This client is for persisting data and creating accounts. You can add and remove assets to
each account you create as well as switch between accounts. 


Testing

To use the test suite for this project, please use the following command:
yarn test

To add or remove tests in this suite, modify the src/test/test.ts file.

For more examples, please refer to the Documentation