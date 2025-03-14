'use client';

import { motion } from 'framer-motion';
import { Droppable } from '@hello-pangea/dnd';

interface TaskColumnProps {
  title: string;
  status: string;
  children: React.ReactNode;
}

export function TaskColumn({ title, status, children }: TaskColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col rounded-lg bg-card p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground">
          {status}
        </span>
      </div>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1 space-y-4"
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </motion.div>
  );
}