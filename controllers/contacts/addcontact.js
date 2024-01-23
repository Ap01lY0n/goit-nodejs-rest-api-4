const { Contact } = require('../../models');

const addContact = async ({ user, body }, res) => {
	const { _id: owner } = user;
	const data = await Contact.create({ ...body, owner });
	res.status(201).json(data);
};

module.exports = addContact;
