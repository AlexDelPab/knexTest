import 'reflect-metadata';
import app from './expressServer';
import config from '../config.json';

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.PORT || 8080);
app.listen(port, () => {
  console.info('Express application started on port: ' + port);
});

