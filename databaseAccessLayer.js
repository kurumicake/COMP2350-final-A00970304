const database = require('./databaseConnection');

async function getAllItems() {
    let sqlQuery = `
        SELECT purchase_item_id, item_name, item_description, cost, quantity FROM purchase_item
    `;
    
    try {
        const results = await database.query(sqlQuery);
        console.log(results);
        return results;
    }
    catch (err) {
        console.error("Error selecting from Purchase Item table", err);
        throw err;
    }
}

module.exports = { getAllItems };
