import Dexie from 'dexie';

export const db = new Dexie('CreativeDogDB');
db.version(1).stores({
  projects: '++id, name, status, clientId, createdAt',
  clients: '++id, name, email',
  tasks: '++id, projectId, name, status, assignedTo, dueDate'
});

export function addProject(name, clientId) {
  return db.projects.add({
    name,
    clientId,
    status: 'active',
    createdAt: new Date()
  });
}

export function getProjects() {
  return db.projects.toArray();
}

export function addTask(projectId, name, assignedTo, dueDate) {
  return db.tasks.add({
    projectId,
    name,
    status: 'pending',
    assignedTo,
    dueDate
  });
}

export function getTasks(projectId) {
  return db.tasks.where('projectId').equals(projectId).toArray();
}