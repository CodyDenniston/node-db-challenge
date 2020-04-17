const db = require('../../data/db-config');

const find = () => {
	return db('Tasks');
};

const findTaskDetailed = () => {
	return db(
		'T.ID',
		'P.name as ProjectName',
		'P.description',
		'T.description',
		'T.task_status'
	)
		.from('Tasks as T')
		.join('Projects as P', 'P.id', 'T.projectID');
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
