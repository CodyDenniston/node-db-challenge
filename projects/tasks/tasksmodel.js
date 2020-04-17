const db = require('../../data/db-config');

const find = () => {
	return db('Projects');
};

const findTaskDetailed = () => {
	return db(
		'T.id',
		'T.name',
		'T.task_status',
		'P.name as ProjectName',
		'P.description'
	)
		.from('Tasks as T')
		.join('projects as P', 'P.id', 'T.projectID');
};

findTaskDetailed();

const findById = id => {
	return db('Tasks').where({ id }).first();
};

const insert = task => {
	return db('Tasks')
		.insert(task, 'ID')
		.then(([id]) => find().where({ id }));
};

const update = (id, changes) => {
	return db('Tasks')
		.where('ID', id)
		.update(changes)
		.then(count => (count > 0 ? findById(id) : null));
};

const remove = id => {
	return db('Tasks').where('ID', id).del();
};

module.exports = {
	find,
	findById,
	insert,
	findTaskDetailed,
	update,
	remove,
};
