export const db = require('knex')({
    client: 'mssql',
    connection: {
        user: 'sa',
        password: 'tma@1234',
        server: 'localhost',
        database: 'DapperASPNetCore',
        options: {
            port: 1433
        }
    }
});;