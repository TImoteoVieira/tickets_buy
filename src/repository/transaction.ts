import connectionPostgreSQL from '../database/config/postgres';

const tableName = 'transaction';

export class TransactionRepository {
    async purchase(uuid_users:string, uuid_tr:string){
        const result = await connectionPostgreSQL(tableName)
        .update({fk_users_uuid: uuid_users})
        .where({id: uuid_tr})
        .returning('*');
        return result;
    }
    async payment(id_user:string, amount:string){
        const result = await connectionPostgreSQL('users').update({balance:amount}).where({id: id_user}).returning('id, balance');
        return result;
    } // adicionar rotina de pagamento
}