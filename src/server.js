import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import authRouter from './routes/authRouter';
import jsxRender from './utils/jsxRender';
import {
  isAuthApi, isAuth, urlSession,
} from './middlewares';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();
const FileStore = store(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid', 				// Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',	// Секретное слово для шифрования, может быть любым
  resave: false, 				// Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, 		// Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, 				// Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use(urlSession);

app.use('/', indexRouter);
// app.use('/api/v1', isAuthApi, apiRouter);
app.use('/auth', authRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
