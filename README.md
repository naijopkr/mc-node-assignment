# Node.js assignment

## Setup
1. Clone the repo:
`$ git clone https://github.com/naijopkr/mc-node-assignment.git`

2. Install dependencies:
`$ npm install`

3. Create a file named `.env` in the root folder with the following content:

```
NODE_ENV=development
PORT=<PORT> //If no port is set here, the app will listen to port 5000
NHTSA_API_URI=https://one.nhtsa.gov/webapi/api/SafetyRatings/
```

4. Start the server:
`$ npm start`

## Tests
The tests were implemented using [Postman](https://www.getpostman.com).

For testing, open the Postman application and import the file `/postman/postman_collection.json`

The collection use a variable to define the port number. The initial value is set to 5000. If you are using other port, right click the collection folder on Postman and click in `Edit`. Then, in the `Variables` tab change the `INITIAL VALUE` for the variable `port` to the port in use.

Open the Runner in the Postman application and run the requests for the collection.