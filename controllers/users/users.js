const { User } = require('../../models');

const changeSubscription = async ({ user, body }, res) => {
	const { _id: id } = user;
	const { subscription } = body;

	const currentUser = subscription
		? await User.findByIdAndUpdate(id, { subscription }, { new: true })
		: user;

	res.json({
		email: currentUser.email,
		subscription: currentUser.subscription,
	});
};

module.exports = {
	changeSubscription,
};
