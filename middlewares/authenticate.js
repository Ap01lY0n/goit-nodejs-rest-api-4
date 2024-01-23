const jwt = require('jsonwebtoken');
const { HttpError } = require('../utils');
const { User } = require('../models');

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
	const { authorization = '' } = req.headers;
	const [bearer, token] = authorization.split(' ');

	if (!bearer) next(HttpError(401));

	try {
		const { id } = jwt.verify(token, SECRET_KEY);
		const user = await User.findById(id);
		req.user = user;
		if (!user || !user.token || user.token !== token) next(HttpError(401, 'User not found'));
		next();
	} catch {
		next(HttpError(401));
	}
};

module.exports = authenticate;
