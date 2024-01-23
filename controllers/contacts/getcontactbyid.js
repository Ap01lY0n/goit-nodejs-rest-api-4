const { Contact } = require('../../models');
const { HttpError } = require('../../utils');

const getContactById = async ({ params }, res) => {
	const { contactId } = params;
	const data = await Contact.findById(contactId).populate('owner', 'name email');
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

module.exports = getContactById;
