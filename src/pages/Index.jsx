import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", dueDate: "", priority: "", project: "" });

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length }]);
    setNewTask({ name: "", dueDate: "", priority: "", project: "" });
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Today</h1>
        <Button onClick={addTask}>Add Task</Button>
      </header>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center space-x-4">
            <Checkbox checked={task.completed} onCheckedChange={() => toggleComplete(task.id)} />
            <div className="flex-1">
              <Input
                value={task.name}
                onChange={(e) => updateTask(task.id, { ...task, name: e.target.value })}
                placeholder="Task name"
              />
            </div>
            <div className="w-32">
              <Input
                type="date"
                value={task.dueDate}
                onChange={(e) => updateTask(task.id, { ...task, dueDate: e.target.value })}
              />
            </div>
            <div className="w-24">
              <Input
                value={task.priority}
                onChange={(e) => updateTask(task.id, { ...task, priority: e.target.value })}
                placeholder="Priority"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="task-name">Task Name</Label>
            <Input
              id="task-name"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              placeholder="Task name"
            />
          </div>
          <div>
            <Label htmlFor="due-date">Due Date</Label>
            <Input
              id="due-date"
              type="date"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="priority">Priority</Label>
            <Input
              id="priority"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
              placeholder="Priority"
            />
          </div>
          <div>
            <Label htmlFor="project">Project/Label</Label>
            <Input
              id="project"
              value={newTask.project}
              onChange={(e) => setNewTask({ ...newTask, project: e.target.value })}
              placeholder="Project/Label"
            />
          </div>
          <div className="flex space-x-4">
            <Button onClick={addTask}>Save</Button>
            <Button variant="outline" onClick={() => setNewTask({ name: "", dueDate: "", priority: "", project: "" })}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
