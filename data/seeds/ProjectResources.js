exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('ProjectResources')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('ProjectResources').insert([
				{ projectID: 1, resourceID: 1 },
				{ projectID: 2, resourceID: 2 },
				{ projectID: 3, resourceID: 3 },
			]);
		});
};
