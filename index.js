import compress from "compression";
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import  db  from './config/Database.js';
import Payments from './routes/PaymentsRoute.js';
import Users from './routes/UsersRoute.js';
import TypesForms from './routes/TypesFormsRoutes.js'
import TypesAccounts from './routes/TypesAccountsRoutes.js'
import Forms from './routes/FormsRoute.js'
import Qr from './routes/QrRoutes.js'
import UsersAccounts from './routes/UsersAccountsRoute.js';
dotenv.config();

const app= express();
(async()=>{
    await  db.sync();
  }
)();

const sessionStore =SequelizeStore(session.Store);
const store =new sessionStore({
  db: db
});

app.use(compress());

app.use(session({
  secret:process.env.SESS_SECRET,
  resave:false,
  saveUninitialized:true,
  store:store,
  cookie:{
    secure:'auto'
  }
}))
app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json({ limit: '5gb' }));
app.use(bodyParser.urlencoded({ limit: '5gb', extended: true }));
app.use(Payments)
app.use(Users)
app.use(Forms)
app.use(TypesForms)
app.use(TypesAccounts)
app.use(Qr)
app.use(UsersAccounts)
store.sync();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
