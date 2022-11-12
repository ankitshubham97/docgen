import dotenv from 'dotenv';
import App from './app';
import UserController from './controllers/user.controller';

dotenv.config();

const app = new App([new UserController()]);
app.listen();
