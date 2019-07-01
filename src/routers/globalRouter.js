import express from 'express';
import { routes } from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home);
globalRouter.get(routes.login);
globalRouter.get(routes.logout);