### Description

Simple console util to pick customers in a given range written in node.js.

### Requirements

You will need node.js LTS v8.11.1 or later.

### Installation

```
git clone git@github.com:shirokoff/intercom.git
cd ./intercom/
npm install
```

### Running util

You can use either 
```
node index.js
```
or npm-script
```
npm run-script run
```

### Tests

```
npm run-script test
```

### Configuration

Edit ```./src/config.js``` for custom settings

 * **BASE_POINT** – array with GPS location of home office 
 * **CUSTOMERS_FILE** – path to file with customers
 * **EARTH_RADIUS** – radius of prefered planet (Earth is strongly recommended) 
 * **MAX_DISTANCE** – distance to look customers for
