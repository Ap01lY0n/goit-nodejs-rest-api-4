const { Contact } = require('../../models');

const listContacts = async ({ user, query }, res) => {
	const { _id: idUser } = user;

	const { page = 1, perPage = 20, favorite } = query;
	const skip = (page - 1) * perPage;
	const data =
		favorite === undefined
			? await Contact.find({ owner: idUser }, '-createdAt -updatedAt', {
					skip,
					perPage,
			  }).populate('owner', 'name email')
			: await Contact.find({ owner: idUser, favorite }, '-createdAt -updatedAt', {
					skip,
					perPage,
			  }).populate('owner', 'name email');

	res.json(data);
};

module.exports = listContacts;
