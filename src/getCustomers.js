const fs = require('fs');
const split = require('split');

const { CUSTOMERS_FILE } = require('./config');
const { isValid } = require('./validator');

/**
 * Terminates process
 * @param {String} error 
 */
const onError = (error) => {
    console.error(error);
    process.exit();
};

const getCustomers = () => new Promise(
    (resolve, reject) => {
        let lineCounter = 0;
        /**
         * It's usually a good idea to process files in chunks, 
         * especially when you don't know if it's going to be 10Gb
         */
        const customersList = fs.createReadStream(CUSTOMERS_FILE);
        const customers = [];
        customersList
            .on('error', () => reject(onError(`ERROR: Can't read file ${CUSTOMERS_FILE}`)))
            .pipe(split())
            .on('data', (line) => {
                lineCounter++;

                try {
                    line = JSON.parse(line);
                } catch(e) {
                    return reject(onError(`ERROR: Malformed data on line ${lineCounter} ${CUSTOMERS_FILE}`));
                }

                if (!isValid(line)) {
                    return reject(onError(`ERROR: Not valid data on line ${lineCounter} ${CUSTOMERS_FILE}`));
                }

                customers.push(line);
            })
            .on('end', () => {
                resolve(customers);
            });
    }
);

module.exports = {
    getCustomers
};
