const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('databaseAccessLayer');

router.get('/', async (req, res) => {
	console.log("page hit");
	
	try {
		const result = await dbModel.getAllItems();
		res.render('index', {allItems: result});
		console.log("here is result: ", result);
	}
	catch (err) {
		res.render('error', {message: 'Error reading from MySQL'});
		console.log("Error reading from mysql");
		console.log(err);
	}
});

router.get('/moveItemUp', async (req, res) => {
	console.log("Move Item Up");
	console.log(req.query);
	let itemId = req.query.id;
	if (itemId) {
		const success = await dbModel.moveItemUp(itemId);
		if (success) {
			res.redirect("/");
		}
		else {
			res.render('error', { message: 'Error writing to MySQL' });
			console.log("Error writing to mysql");
			console.log(err);
		}
	}
});

router.get('/moveItemDown', async (req, res) => {
	console.log("Move Item Down");
	console.log(req.query);
	let itemId = req.query.id;
	if (itemId) {
		const success = await dbModel.moveItemDown(itemId);
		if (success) {
			res.redirect("/");
		}
		else {
			res.render('error', { message: 'Error writing to MySQL' });
			console.log("Error writing to mysql");
			console.log(err);
		}
	}
});

router.get('/deletePurchaseItem', async (req, res) => {
	console.log("delete Item");
	console.log(req.query);
	let itemId = req.query.id;
	if (itemId) {
		const success = await dbModel.deletePurchaseItem(itemId);
		if (success) {
			res.redirect("/");
		}
		else {
			res.render('error', { message: 'Error writing to MySQL' });
			console.log("Error writing to mysql");
			console.log(err);
		}
	}
});

module.exports = router;
