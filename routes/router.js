const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('databaseAccessLayer');

router.get('/', async (req, res) => {
	console.log("page hit");
	
	try {
		const result = await dbModel.getAllItems();
		res.render('index', {getAllItems: result});
		console.log(`this is my result: ${result}`);
	}
	catch (err) {
		res.render('error', {message: 'Error reading from MySQL'});
		console.log("Error reading from mysql");
		console.log(err);
	}
});

module.exports = router;
