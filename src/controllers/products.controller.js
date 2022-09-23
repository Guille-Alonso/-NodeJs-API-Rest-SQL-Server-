import {getConnection,sql} from '../database/connection'
import querys from '../database/querys'

export const getProducts = async (req,res)=>{ //sin el async no funciona await, el await es una promesa de ejecucion
try{
    const pool = await getConnection(); //aqui obtengo la conexion generada x esa funcion en el archivo connection
    const result = await pool.request().query(querys.getAllProduct); //luego con ese pool hago una peticion q es la consulta a la bd
    console.log(result);
    
    res.json(result.recordset) //respondemos un json
}catch(error){
res.status(500);
res.send(error.message);
}

}; 
//lo exportamos para q otros archivos puedan hacer uso de la funcion

export const createNewProduct = async (req,res)=>{
    const {name,description} = req.body;
    let {quantity} = req.body;
    
    if(name==null||description==null){
        return res.status(400).json({msg:'bad request. Please..'})
    }
    if(quantity==null) quantity=0;
    
    try{
    
    //console.log(name, description, quantity)
    const pool = await getConnection();
    await pool.
    request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text, description)
    .input("quantity", sql.Int, quantity)
    .query(querys.addNewProduct);
    
        res.json({name, description,quantity})
}catch(error){
res.status(500);
res.send(error.message);
}

} 

export const getProductById = async (req,res) => {
const {id} = req.params;

const pool = await getConnection();
const result = await pool
.request()
.input("id", id)
.query(querys.getProductByid)

res.send(result.recordset[0])
}

export const deleteProductById = async (req,res) => {
    const {id} = req.params;
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", id)
    .query(querys.deleteProduct)
    
    res.send(result)
    }

export const getTotalProducts = async (req,res) => {
        
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(querys.getTotalProducts)
        console.log(result)
        res.json(result.recordset[0]['']) // el recordset es un arreglo, me retorna en un array la cantidad del objeto en este caso
        }

export const updateProductById = async (req, res) => {
            const { name, description, quantity } = req.body;
            const {id} = req.params;
            // validating
            if (description == null || name == null || quantity == null) {
              return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
            }
          
            try {
              const pool = await getConnection();
              await pool
                .request()
                .input("name", sql.VarChar, name)
                .input("description", sql.Text, description)
                .input("quantity", sql.Int, quantity)
                .input("id",sql.Int, id)
                .query(querys.updateProductById);
              res.json({ name, description, quantity });
            } catch (error) {
              res.status(500);
              res.send(error.message);
            }
          };