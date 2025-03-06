import app from './source/app';
import dotenv from 'dotenv';
import { Server } from 'http';

dotenv.config();

const PORT = process.env.PORT || 3000;
let server: Server;

const startServer = async () => {
  try {
    server = app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });

    const shutdown = () => {
      console.log('Shutting down gracefully');
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
    
  } catch (error) {
    console.error('Error starting the server', error);
    process.exit(1);
  }
};

startServer();
