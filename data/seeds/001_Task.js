exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('Tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('Tasks').insert([
				{ description: 'do sprint', task_status: true, projectID: 3 },
				{
					description: 'do sprint',
					task_status: true,
					projectID: 1,
				},
				{ description: 'do more sprint', task_status: true, projectID: 1 },
			]);
		});
};
