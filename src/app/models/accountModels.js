import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
const accountModels = sequelize.define('tbl_account', {
  // Model attributes are defined here
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_create_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    actived: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
}, {
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at'
  // Other model options go here
});

// `sequelize.define` also returns the model
accountModels.sync().then(()=>{
    accountModels.findOrCreate({where:{username:'khanhduy',name:'DUY',password:'pass',password_text:'salt',salt:'salt',user_create_id:'user_create_id',actived:1}});
});
export default accountModels;