const{Sequelize} = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'Shashank@12', {
  host: 'localhost',
  dialect: 'mysql',
});


(async () => {
  try {
    
    await sequelize.authenticate();
    console.log("Connection to the Database has been created");

  } catch (error) {
    console.log(error);
  }
})();


module.exports = sequelize;

















//  const mysql = require('mysql2');


//  const connection = mysql.createConnection({
//      host :'localhost',
//      user : 'root',
//      password : 'Shashank@12',
//     database : 'testdb'
//  })

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Connection has been created");

//    const creationQuery = `create table IF NOT EXISTS students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(200),
//         email VARCHAR(250)
//     )`

//    connection.execute(creationQuery,(err)=>{
//          if(err){
//              console.log(err);
//             connection.end();
//             return;
//         }

//          console.log("Table is created")
//      })
//  })

//  module.exports = connection;































