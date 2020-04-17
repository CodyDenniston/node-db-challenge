const db = require('../data/db-config');

const find = () => {
	return db('Projects');
};

const findById = id => {
	return db('Projects').where({ id }).first();
};

const findResourcesByProjectId = id => {
	return db('*')
		.from('ProjectResources as P')
		.where({ projectID: id })
		.join('Resources as R', 'P.resourceID', 'R.ID');
};

const findTasksByProjectId = id => {
	return db('tasks').where({ projectID: id });
};

const insert = project => {
	return db('Projects')
		.insert(project, 'ID')
		.then(([id]) => find().where({ id }));
};

const update = (id, changes) => {
	return db('Projects')
		.where('ID', id)
		.update(changes)
		.then(count => (count > 0 ? findById(id) : null));
};

const remove = id => {
	return db('Projects').where('ID', id).del();
};

module.exports = {
	find,
	findById,
	findResourcesByProjectId,
	findTasksByProjectId,
	insert,
	update,
	remove,
};
