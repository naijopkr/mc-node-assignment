# Node.js assignment

Node.js version: `10.13.0`

## Setup
1. Clone the repo:

```
$ git clone https://github.com/naijopkr/mc-node-assignment.git`
$ cd mc-node-assignment
```

2. Install dependencies:

```
$ npm install
```

3. Create a file named `.env` in the project root folder with the following content:

```
NODE_ENV=development
PORT=<PORT> //If no port is set here, the app will listen to port 5000
NHTSA_API_URI=https://one.nhtsa.gov/webapi/api/SafetyRatings/
```

4. Start the server:

```
$ npm start
```

## Tests
The tests were implemented using [Postman](https://www.getpostman.com).

For testing, open the Postman application and import the file `<PROJECT_FOLDER>/postman/postman_collection.json`

The collection use a variable to define the port number. The default value is set to 5000. If you are using other port, right click the collection folder on Postman and click in `Edit`. Then, in the `Variables` tab, change the `INITIAL VALUE` and `CURRENT VALUE` for the variable `port` to the port in use.

Open the Runner in the Postman application and run the requests for the collection.