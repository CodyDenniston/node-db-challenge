exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('Projects')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('Projects').insert([
				{ name: 'Website', description: 'Make Frontend' },
				{ name: 'Website', description: 'Make Backend' },
				{ name: 'Game', description: 'Make Everything' },
			]);
		});
};
