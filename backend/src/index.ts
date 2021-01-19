import * as dotenv from 'dotenv';
import App from './app';

dotenv.config({ path: '.env' });

const app = new App();
app.load();
app.start();
