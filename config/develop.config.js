import * as production from './product.config';

module.exports = Object.assign(production, {
	NODE_ENV: 'develop'
});