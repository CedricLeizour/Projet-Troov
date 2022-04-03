import express from 'express';
import cors from 'cors';
import User from './src/routes/user';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(User);
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));