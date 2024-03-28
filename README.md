# SendSMS Plugin

The SendSMS plugin is a Node.js module designed to simplify the process of sending SMS messages using any SMS sending API. This plugin handles the authentication and HTTP request to the SMS sending API, allowing you to easily integrate SMS functionality into your Node.js applications.

## Installation

To use the SendSMS plugin, you'll need to install it via npm. You can do this by running the following command:

```bash
npm install sendsms-plugin

Usage
To send an SMS message using the SendSMS plugin, you need to require the module and call the SendSMS function with the appropriate data. Here's an example of how to use it:

const SendSMS = require('sendsms-plugin');

const data = {
  phone_number: '94771234567', // Phone number in international format (e.g., '94771234567')
  message: 'Hello, this is a test message.', // Message content
};

SendSMS(data)
  .then(result => {
    console.log('SMS sent successfully:', result);
  })
  .catch(error => {
    console.error('Error sending SMS:', error);
  });

Make sure to set the following environment variables in your application before using the SendSMS plugin:

USER_ID: Your user ID.
API_KEY: Your API key.
SENDER_ID: Your sender ID.

You can copy and paste this content into a file named `README.md` in your GitHub repository.


