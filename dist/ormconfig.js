"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const config = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'cima_module',
    entities: [path_1.join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
    migrations: ['dist/db/migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map