const { Contact } = require('../models');
const { HttpError } = require('../utils');

const listContacts = async (_req, res) => {
	const data = await Contact.find();
	res.json(data);
};

const getContactById = async ({ params }, res) => {
	const { contactId } = params;
	const data = await Contact.findById(contactId);
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

const removeContact = async ({ params }, res) => {
	const { contactId } = params;
	const data = await Contact.findByIdAndDelete(contactId);
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json({
		message: 'Delete success',
	});
};

const addContact = async ({ body }, res) => {
	const data = await Contact.create(body);
	res.status(201).json(data);
};

const updateContact = async (req, res) => {
	const { contactId } = req.params;
	const data = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

const updateContactFavorite = async (req, res) => {
	const { contactId } = req.params;
	const data = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
	updateContactFavorite,
};
