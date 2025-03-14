'use client';

import { motion } from 'framer-motion';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useAtom } from 'jotai';
import { TaskList } from './task-list';
import { TaskColumn } from './task-column';
import { tasksAtom, searchQueryAtom } from './task-header';

type TaskStatus = 'todo' | 'in-progress' | 'done';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: Date;
  tags?: string[];
  subtasks?: { id: string; title: string; completed: boolean }[];
}

export function TaskBoard() {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [searchQuery] = useAtom(searchQueryAtom);

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getFilteredTasksByStatus = (status: TaskStatus) => {
    return filteredTasks.filter(task => task.status === status);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    const updatedItem = {
      ...reorderedItem,
      status: result.destination.droppableId as TaskStatus
    };
    items.splice(result.destination.index, 0, updatedItem);

    setTasks(items);
  };

  return (
    <div className="h-full p-6 overflow-auto" data-testid="task-board">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TaskColumn title="To Do" status="todo">
            <TaskList tasks={getFilteredTasksByStatus('todo')} />
          </TaskColumn>
          <TaskColumn title="In Progress" status="in-progress">
            <TaskList tasks={getFilteredTasksByStatus('in-progress')} />
          </TaskColumn>
          <TaskColumn title="Done" status="done">
            <TaskList tasks={getFilteredTasksByStatus('done')} />
          </TaskColumn>
        </div>
      </DragDropContext>
    </div>
  );
}