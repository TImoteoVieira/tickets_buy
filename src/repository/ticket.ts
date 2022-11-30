import connectionPostgreSQL from '../database/config/postgres';

const tableName = 'ticket';

export class TicketRepository {
    async add(tk: any){
        const uuid = await connectionPostgreSQL(tableName)
        .insert({entity:tk.entity, description: tk.description, data: tk.data}).returning('id');
        const result = await connectionPostgreSQL('transaction').insert({fk_ticket_uuid: uuid[0].id, title_amount: tk.amount});
        return result;
    }
    async list(){
        const result = await connectionPostgreSQL.raw('select tk.* from ticket tk left join "transaction" t on t.fk_users_uuid = tk.id where t.fk_users_uuid is null')
        return result.rows;
    }
}