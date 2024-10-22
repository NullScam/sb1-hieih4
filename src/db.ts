import Dexie, { Table } from 'dexie';

export interface Project {
  id?: number;
  name: string;
  status: string;
  clientId?: number;
  createdAt: Date;
}

export class CreativeDogDB extends Dexie {
  projects!: Table<Project>;

  constructor() {
    super('CreativeDogDB');
    this.version(1).stores({
      projects: '++id, name, status, clientId, createdAt'
    });
  }
}

export const db = new CreativeDogDB();

export async function addProject(name: string) {
  return await db.projects.add({
    name,
    status: 'active',
    createdAt: new Date()
  });
}

export function getProjects() {
  return db.projects.toArray();
}