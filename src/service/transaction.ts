import { TransactionRepository } from "../repository/transaction";

const transactionRepository = new TransactionRepository();

export class TransactionService{
    async purchase(id_user: string, tr: string){
        try {
            const result = await transactionRepository.purchase(id_user, tr);
            // await transactionRepository.payment(result.title_amount, result.);
            return result;
        } catch (error) {
            return false;
        }
    }
}