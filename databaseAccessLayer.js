const database = include('/databaseConnection');


async function getAllItems() {
	let sqlQuery = `
		SELECT purchase_item_id, item_name, item_description, cost, quantity FROM purchase_item
	`;
	
	try {
		const results = await database.query(sqlQuery);
		console.log(results[0]);
		return results[0];
	}
	catch (err) {
		console.log("Error selecting from Purchase Item table");
		console.log(err);
		return null;
	}
}


module.exports = {getAllItems}
