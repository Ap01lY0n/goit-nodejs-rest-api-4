const { Contact } = require('../../models');
const { HttpError } = require('../../utils');

const updateContact = async ({ params, body }, res) => {
	const { contactId } = params;
	const data = await Contact.findByIdAndUpdate(contactId, body, { new: true });
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

module.exports = updateContact;
