const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routes/projects-router');
const actionsRouter = require('./routes/actions-router');

const server = express();

server.use(helmet());
server.use(express.json());

// server check
server.get('/', (req, res) => {
  res.status(200).json({ message: 'SERVER IS RUNNING' });
});

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n** API running on http://localhost:${PORT} **\n`);
});
