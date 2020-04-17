Project
id, pk, unique, incremental
name, required
description
completed, bool(true/false)

Tasks
id, pk, unique, incremental
TaskDescription, required
notes,
completed, bool(true/false)

Resources
id, pk, unique, incremental
name, required, unique
description

ProjectResources
ProjectID, fk
ProjectName,
ResourceID,
ResourceName

ProjectTasks
Pro
