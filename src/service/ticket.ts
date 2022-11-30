import { TicketRepository } from "../repository/ticket";

const ticketRepository = new TicketRepository();

export class TicketService{
    async add(tk: any){
        try {
            const result = await ticketRepository.add(tk);
            return result;
        } catch (error) {
            return false;
        }
    }

    async list(){
        try {
            const result = await ticketRepository.list();
            if(result.length < 1){
                return false;
            }
            return result;
        } catch (error) {
            return false;
        }
    }
}