import express from 'express';
import cors from 'cors';
import User from './src/routes/user';
import './src/config';

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/users', User);

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));