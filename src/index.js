import express  from 'express';
import morgan   from 'morgan';
import fs       from 'fs';
import path     from 'path';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/index.js';
import sequelize from '../src/app/config/database.js';
sequelize.sync().then(()=>{

});
dotenv.config({path:'./.env'});
const app = express();
const port = process.env.PORT;
// bodyParser.urlencoded();
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(methodOverride());
app.use(express.urlencoded());
// parse application/json
app.listen(port,()=>{
    console.log('listen port:',port);
});
app.use(morgan('combined'));
route(app);

