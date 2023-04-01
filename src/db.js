const mysql=require('mysql')
const {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} =require( './config.js')
require('dotenv').config();


const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  database: process.env.DB_NAME
});//conecto con la base de datos

conexion.connect((err)=>{
  if(err){
      console.log('ha ocurrido un error :'+ err)
  }
  else
  {console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion//exporto la conexion
