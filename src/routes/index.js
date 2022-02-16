import home from './home.js';
import account from './account.js';
import auth from './auth.js';
function  route(app){
    app.use('/',home);
    app.use('/account',account);
    app.use('/auth',auth);
}
export default route;