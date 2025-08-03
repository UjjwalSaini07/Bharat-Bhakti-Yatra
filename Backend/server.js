import express from 'express';
import chalk from 'chalk';

const app = express();
const PORT = process.env.PORT || 3000;

// Start the server
const httpServer = app.listen(PORT, () => {
  console.clear();
  console.log(`${chalk.green.bold('\n=========================================')}`);
  console.log(`${chalk.green.bold('🚀 Server Status: ')}${chalk.cyan.bold('Online')}`);
  console.log(`${chalk.green.bold('🌐 Listening on: ')}${chalk.yellow.underline(`http://localhost:${PORT}`)}`);
  console.log(`${chalk.green.bold('📅 Started at: ')}${chalk.magenta(new Date().toLocaleString())}`);
  console.log(`${chalk.green.bold('=========================================\n')}`);
});

httpServer.on('close', () => {
  console.log(chalk.red.bold('\n=========================================')); 
  console.log(chalk.red.bold('🛑 Server Status: ') + chalk.yellow.bold('Offline'));
  console.log(chalk.red.bold('🔔 Server has been closed.'));
  console.log(chalk.red.bold('=========================================\n'));
});

process.on('SIGINT', () => {
  console.log(chalk.blue.bold('Gracefully shutting down the server...'));
  httpServer.close(() => {
    console.log(chalk.blue.bold('Server shut down complete.'));
    process.exit(0);
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to Bharat-Bhakti-Yatra - Backend!');
});
