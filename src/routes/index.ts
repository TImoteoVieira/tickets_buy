import { TicketController } from '../controller/ticket';
import { Router } from 'express';
const routes = Router();
import { UsersController } from '../controller/users';
import { TransactionController } from '../controller/transaction';


const ticketController = new TicketController();
const usersController = new UsersController();
const transactionController = new TransactionController();

routes.post('/users', usersController.add);
routes.get('/users/:id', usersController.listAmount);

routes.post('/ticket', ticketController.add);
routes.get('/ticket', ticketController.list);

routes.put('/transaction', transactionController.add)


export default routes;