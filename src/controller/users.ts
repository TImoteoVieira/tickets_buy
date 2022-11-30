import { UsersService } from '../service/users';
import { Request, Response, NextFunction } from "express";

const userService = new UsersService();

export class UsersController {
    async add(req: Request, res: Response, next: NextFunction){
        try {
            const user = await req.body;
            if(user.pass.length < 8){
                return res.status(500).json({'Error': 'Check the credentials'});
            }
            //validação se o usuário já existe
            if(user.cpf){
                //validateCPF(user.cpf)
                //add auth
                await userService.add(user.cpf, user.pass);
                return res.status(201).json({'Created': 'Success'});
            }
            if(user.email){
                //validateEmail(user.email)
                //add auth
                await userService.add(user.email, user.pass);
                return res.status(201).json({'Created': 'Success'});
            }
            return res.status(500).json({'Error': 'Check the credentials'});
        } catch (error) {
            next(error);
        }
    }

    async listAmount(req: Request, res: Response, next: NextFunction){
        try {
            const {id} = req.params;
            if(id){
                const result = await userService.listAmount(id);
                if(result){
                    return res.status(200).json({'Amount': result});
                }
                return res.status(404).json({'Error': 'Not Found'});
            }
            return res.status(404).json({'Error': 'Not Found'});
        } catch (error) {
            next(error);
        }
    }
}