const { User } = require('../../models');

const getCurrent = async ({ user }, res) => {
	const { _id: id } = user;

	const currentUser = await User.findOne({ id });

	res.json({
		email: currentUser.email,
		subscription: currentUser.subscription,
	});
};

module.exports = getCurrent;
