var production = require('./product.config.js');

module.exports = Object.assign(production, {
	NODE_ENV: 'development'
});