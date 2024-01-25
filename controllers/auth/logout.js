const { User } = require('../../models');

const logout = async ({ user }, res) => {
	const { _id: id } = user;

	await User.findByIdAndUpdate(id, { token: '' });

	res.status(204).json({});
};

module.exports = logout;
