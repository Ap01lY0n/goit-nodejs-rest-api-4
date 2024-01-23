const { Contact } = require('../../models');
const { HttpError } = require('../../utils');

const removeContact = async ({ params, user }, res) => {
	const { contactId } = params;
	const data = await Contact.findByIdAndDelete(contactId);
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json({
		message: 'Delete success',
	});
};

module.exports = removeContact;
