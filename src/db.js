const mysql=require('mysql')
const {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} =require( './config.js')

const conexion = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port:DB_PORT,
  database: DB_NAME
});//conecto con la base de datos

conexion.connect((err)=>{
  if(err){
      console.log('ha ocurrido un error :'+ err)
  }
  else
  {console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion//exporto la conexion
