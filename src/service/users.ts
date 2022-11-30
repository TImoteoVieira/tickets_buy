import { UsersRepository } from "../repository/users";

const usersRepository = new UsersRepository();

export class UsersService{
    async add(username: string, pass: string){
        try {
            const result = await usersRepository.add(username, pass);
            return result;
        } catch (error) {
            return error;
        }
    }

    async listAmount(id: string){
        try {
            const result = await usersRepository.listAmount(id);
            if(result){
                return result[0].balance;
            }
            return false;
        } catch (error) {
            return false;
        }
    }
}