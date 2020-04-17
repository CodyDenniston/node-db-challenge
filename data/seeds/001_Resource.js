exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('Resources')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('Resources').insert([
				{
					name: 'React Library',
					description: 'Library for React',
				},
				{
					name: 'Express Library',
					description: 'Library for express',
				},
				{ name: 'Computer', description: 'It computes' },
			]);
		});
};
