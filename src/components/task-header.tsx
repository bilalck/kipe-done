'use client';

import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { atom, useAtom } from 'jotai';
import { TaskDialog } from './task-dialog';

export const tasksAtom = atom<Task[]>([]);
export const searchQueryAtom = atom<string>('');

interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  dueDate?: Date;
  tags?: string[];
  subtasks?: { id: string; title: string; completed: boolean }[];
}

export function TaskHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const handleCreateTask = (task: any) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      ...task,
      subtasks: [],
      status: 'todo' as const
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <header className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 rounded-full border bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </button>
      </div>

      <TaskDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleCreateTask}
      />
    </header>
  );
}