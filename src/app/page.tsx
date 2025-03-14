import { TaskBoard } from '@/components/task-board';
import { TaskHeader } from '@/components/task-header';
import { TaskSidebar } from '@/components/task-sidebar';

export default function Home() {
  return (
    <div className="flex h-screen">
      <TaskSidebar />
      <main className="flex-1 flex flex-col">
        <TaskHeader />
        <TaskBoard />
      </main>
    </div>
  );
}
