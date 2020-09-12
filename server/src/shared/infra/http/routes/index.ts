import { Router } from 'express';
import UsersRouter from '@modules/users/infra/http/routes/users.routes';
import SessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import PasswordRouter from '@modules/users/infra/http/routes/password.routes';
import AppointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/sessions', SessionsRouter);
routes.use('/password', PasswordRouter);
routes.use('/appointments', AppointmentsRouter);

export default routes;
