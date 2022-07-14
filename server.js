const { faker } = require('@faker-js/faker');

const express = require('express');
const app = express();

// ! Middleware
app.use(express.json(), express.urlencoded({ extended: true }));

class User {
	constructor() {
		this._id = faker.database.mongodbObjectId();
		this.firstName = faker.name.firstName();
		this.lastName = faker.name.lastName();
		this.email = faker.internet.email();
		this.phoneNumber = faker.phone.number();
		this.password = faker.internet.password();
	}
}

class Company {
	constructor() {
		this._id = faker.database.mongodbObjectId();
		this.name = faker.company.companyName();
		this.address = {
			street: faker.address.street(),
			city: faker.address.city(),
			state: faker.address.state(),
			zip: faker.address.zipCode(),
			country: faker.address.country(),
		};
	}
}

// req is short for request
// res is short for response
app.get('/api/users/new', (req, res) => {
	res.json(new User());
});
app.get('/api/companies/new', (req, res) => {
	res.json(new Company());
});
app.get('/api/user/company', (req, res) => {
	res.json([new User(), new Company()]);
});

const server = app.listen(8080, () =>
	console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
