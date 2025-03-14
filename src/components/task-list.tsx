'use client';

import { Draggable } from '@hello-pangea/dnd';
import { format } from 'date-fns';
import { Tag, Calendar, CheckSquare } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  dueDate?: Date;
  tags?: string[];
  subtasks?: { id: string; title: string; completed: boolean }[];
}

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="group rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-medium">{task.title}</h3>
              {task.description && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {task.description}
                </p>
              )}
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                {task.dueDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(task.dueDate, 'MMM d')}
                  </div>
                )}
                {task.tags && task.tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {task.tags.length}
                  </div>
                )}
                {task.subtasks && task.subtasks.length > 0 && (
                  <div className="flex items-center gap-1">
                    <CheckSquare className="h-4 w-4" />
                    {task.subtasks.filter((st) => st.completed).length}/
                    {task.subtasks.length}
                  </div>
                )}
              </div>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}