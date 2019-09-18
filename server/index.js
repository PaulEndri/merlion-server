import Koa from 'koa';
import dotenv from 'dotenv';
import DatabaseMiddleware from './middleware/database';
import KoaRouter from 'koa-better-router';
import Routes from './routes';
import BodyParser from 'koa-bodyparser';

dotenv.load();

const app = new Koa();
const Router = KoaRouter({prefix:'/api'});

app.use(BodyParser());

Routes.forEach(({route, action, method}) => {
    Router.addRoute(method, route, action);
});

app.use(DatabaseMiddleware);

app.use(Router.middleware());

app.listen(process.env.port, () => {
    console.log(`App succesfully started on port ${process.env.port}`);
});
