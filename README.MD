rodar migrações:
    npx knex --knexfile src/database/knexfile.ts "migrate:latest" "--debug"

testar em dev:
    npx ts-node-dev src/server.ts