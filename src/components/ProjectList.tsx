import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, addProject, Project } from '../db';

function ProjectList() {
  const [newProjectName, setNewProjectName] = useState('');
  const projects = useLiveQuery(() => db.projects.toArray());

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      await addProject(newProjectName);
      setNewProjectName('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects</h1>
      
      <form onSubmit={handleAddProject} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="New project name"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Project
          </button>
        </div>
      </form>
      
      <ul className="divide-y divide-gray-200">
        {projects?.map((project: Project) => (
          <li key={project.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {project.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Status: {project.status}
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  View
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;