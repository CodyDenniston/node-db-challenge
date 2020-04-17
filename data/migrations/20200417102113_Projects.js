exports.up = function (knex) {
	return knex.schema
		.createTable('Projects', tbl => {
			tbl.increments('ID').primary();
			tbl.string('name', 128).notNullable().index();
			tbl.text('description');
			tbl.boolean('project_status').notNullable().defaultTo(false);
		})

		.createTable('Resources', tbl => {
			tbl.increments('ID').primary();
			tbl.string('name', 128).notNullable();
			tbl.string('description', 255);
		})

		.createTable('ProjectResources', tbl => {
			tbl.increments('ID').primary();
			tbl
				.integer('projectID')
				.unsigned()
				.notNullable()
				.references('Projects.ID')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('resourceID')
				.unsigned()
				.notNullable()
				.references('Resources.ID')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('Tasks', tbl => {
			tbl.increments('ID').primary();
			tbl.string('description', 255).notNullable();
			tbl.string('notes', 255);
			tbl.boolean('task_status').defaultTo(false);
			tbl
				.integer('projectID')
				.notNullable()
				.unsigned()
				.notNullable()
				.references('Projects.ID')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function (knex) {
	return (
		knex.schema
			// .dropTableIfExists('Project_Tasks')
			.dropTableIfExists('Tasks')
			.dropTableIfExists('ProjectResources')
			.dropTableIfExists('Resources')
			.dropTableIfExists('Projects')
	);
};
