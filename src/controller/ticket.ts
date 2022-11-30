import { TicketService } from '../service/ticket';
import { Request, Response, NextFunction } from "express";

const ticketService = new TicketService();

export class TicketController {
    async add(req: Request, res: Response, next: NextFunction){
        try {
            const {entity, description, amount, data} = await req.body;
            if(entity && description && data && amount){
                const tk = {entity, description, data, amount};
                const result = await ticketService.add(tk);
                if(result){
                    return res.status(201).json({'Created': 'Success'});
                }
                return res.status(500).json({'Error': 'Not insert'})
            }
            return res.status(500).json({'Error': 'Internal Sever Error'});
        } catch (error) {
            next(error);
        }
    }
    async list(req: Request, res: Response, next: NextFunction){
        try {
            const result = await ticketService.list();
            if(result){
                return res.status(200).json({'Result': result});
            }
            return res.status(200).json({'Error':'Not Found Tickets'});
        } catch (error) {
            next(error);
        }
    }
}