const http = require('http');

const server = http.createServer((req, res) => {
  const tasks = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: true },
    { id: 3, description: 'Task 3', completed: false }
  ];

  const tasksWithDetails = tasks.map(task => {
    return {
      id: task.id,
      description: task.description,
      completed: task.completed,
      status: task.completed ? 'completed' : 'pending'
    };
  });

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasksWithDetails));
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
