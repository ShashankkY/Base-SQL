const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');


const IdentityCard= sequelize.define('identityCard', {

    id: {    
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        },

    cardNo:{
    type: DataTypes.INTEGER,
    unique:true,
    allowNull:false
    }

})

module.exports = IdentityCard;

















