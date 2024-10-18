
import { Sequelize } from "sequelize-typescript";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } from '../config/config.js';


// Convert import.meta.url to __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sequelize = new Sequelize({
    database: DB_NAME,
    dialect: "mysql",
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: Number(DB_PORT),
    models: [__dirname + '/models'],
});

sequelize.authenticate()
.then(()=>{
    console.log("connected"); 
})
.catch((err)=>{
    console.log(err);
})
sequelize.sync({force: false})
.then(()=>{
    console.log("synced!!")
});

export default sequelize;