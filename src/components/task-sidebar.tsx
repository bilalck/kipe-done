'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, Tag, Settings, FolderOpen, Users, Moon, Sun, Focus, Bell } from 'lucide-react';

export function TaskSidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleFocusMode = () => {
    setIsFocusMode(!isFocusMode);
    document.body.classList.toggle('focus-mode');
  };

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`w-64 border-r bg-card p-4 ${isFocusMode ? 'focus-mode' : ''}`}
    >
      <div className="mb-8">
        <h1 className="text-xl font-bold">Kipe Done</h1>
        <p className="text-sm text-muted-foreground">Task Management</p>
      </div>

      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          <Home className="h-4 w-4" />
          Today
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary/80"
        >
          <Calendar className="h-4 w-4" />
          Upcoming
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary/80"
        >
          <Tag className="h-4 w-4" />
          Tags
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary/80"
        >
          <FolderOpen className="h-4 w-4" />
          Projects
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary/80"
        >
          <Users className="h-4 w-4" />
          Collaboration
          <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
            New
          </span>
        </a>
      </nav>

      <div className="mt-8 space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Preferences</h3>
          <button
            onClick={toggleFocusMode}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/80 ${isFocusMode ? 'bg-secondary text-secondary-foreground' : 'text-muted-foreground'}`}
          >
            <Focus className="h-4 w-4" />
            Focus Mode
          </button>
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/80"
          >
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Notifications</h3>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/80">
            <Bell className="h-4 w-4" />
            Reminders
          </button>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary/80"
        >
          <Settings className="h-4 w-4" />
          Settings
        </a>
      </div>
    </motion.aside>
  );
}