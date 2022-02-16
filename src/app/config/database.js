import {Sequelize} from 'sequelize';
const sequelize = new Sequelize('p_hethong', 'root', null, {
    host: 'localhost',
    dialect:'mysql',
    logging:false
});

export default sequelize;