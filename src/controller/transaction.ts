import { TransactionService } from '../service/transaction';
import { Request, Response, NextFunction } from "express";

const transactionService = new TransactionService();

export class TransactionController {
    async add(req: Request, res: Response, next: NextFunction){
        try {
            const {tr_id, id_users} = await req.body;
            // add verificação de valores para efetuar a compra do ingresso
            if(tr_id && id_users){
                const result = await transactionService.purchase(id_users, tr_id);
                if(result){
                    return res.status(200).json({'Success': 'Purchase Made'});
                }
                return res.status(500).json({'Error': 'Not insert'})
            }
            return res.status(500).json({'Error': 'Internal Sever Error'});
        } catch (error) {
            next(error);
        }
    }
}