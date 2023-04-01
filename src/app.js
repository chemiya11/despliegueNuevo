const express=require( 'express')
const  conexion  =require( './db.js')
const PORT =require( './config.js')
const cors =require( "cors")
const app = express()//llamo de express

app.use(cors())
app.use(express.static("frontend"));

app.get('/busqueda', async (req, res) => {//ruta / hago consulta para ver usuarios y devuelvo json
  const { id } = req.params
    let sql = `select * from users`//hago select de todos
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)//devuelvo el resultado en json
        }
    })
})


app.listen(3000)//pongo a escuchar en el puerto
console.log('Server on port', 3000)
