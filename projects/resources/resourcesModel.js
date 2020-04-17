const db = require('../../data/db-config');

const find = () => {
	return db('Resources');
};

const findById = id => {
	return db('Resources').where({ id }).first();
};

const insert = resources => {
	return db('Resources')
		.insert(resources, 'ID')
		.then(([id]) => find().where({ id }));
};

const update = (id, changes) => {
	return db('Resources')
		.where('ID', id)
		.update(changes)
		.then(count => (count > 0 ? findById(id) : null));
};

const remove = id => {
	return db('Resources').where('ID', id).del();
};

module.exports = {
	find,
	insert,
	update,
	remove,
};
