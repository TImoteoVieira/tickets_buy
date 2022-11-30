import connectionPostgreSQL from '../database/config/postgres';

const tableName = 'users';

export class UsersRepository {
    async add(user: string, pass: string){
        const result = await connectionPostgreSQL(tableName).insert({username: user, password: pass});
        return result;
    }
    async listAmount(id_uuid:string){
        const result = await connectionPostgreSQL(tableName).select('balance').where({id:id_uuid}).returning('balance');
        return result;
    }
    async listTicket(id_uuid:string){
        const result = await connectionPostgreSQL(tableName)
        .select('ticket.*')
        .from(tableName)
        .innerJoin('ticket', 'users.id', '=', 'ticket.id' )
        .where({id:id_uuid});
        return result;
    }
}