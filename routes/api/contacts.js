const express = require('express');
const { validateBody, isValidId } = require('../../middlewares');
const { contactAddSchema, contactFavoriteSchema } = require('../../models');
const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
	updateContactFavorite,
} = require('../../controllers');
const { ctrlWrapper } = require('../../utils');

const router = express.Router();

router.get('/', ctrlWrapper(listContacts));

router.get('/:contactId', isValidId, ctrlWrapper(getContactById));

router.post('/', validateBody(contactAddSchema), ctrlWrapper(addContact));

router.put('/:contactId', isValidId, validateBody(contactAddSchema), ctrlWrapper(updateContact));

router.patch(
	'/:contactId/favorite',
	isValidId,
	validateBody(contactFavoriteSchema, 'missing field favorite'),
	ctrlWrapper(updateContactFavorite)
);

router.delete('/:contactId', isValidId, ctrlWrapper(removeContact));

module.exports = router;
