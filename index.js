const { MAX_DISTANCE, CUSTOMERS_FILE, BASE_POINT } = require('./src/config');
const { calculateDistance } = require('./src/geo');
const { getCustomers } = require('./src/getCustomers');

/**
 * Main function
 */
const processCustomers = async () => {
    const customers = await getCustomers();
    customers
        .filter((customer) => {
            const lat = parseInt(customer.latitude, 10);
            const long = parseInt(customer.longitude, 10);
            return calculateDistance(BASE_POINT[0], BASE_POINT[1], lat, long) <= MAX_DISTANCE;
        })
        .sort((a, b) => a.user_id - b.user_id)
        .forEach((customer) => console.log(`${customer.user_id}\t${customer.name}`));
};

processCustomers();
