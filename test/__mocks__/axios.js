module.exports = {
	get: jest.fn(requestData => Promise.resolve(requestData))
};
