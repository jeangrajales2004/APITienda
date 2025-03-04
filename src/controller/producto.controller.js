const modeloProducto = require('../models/producto.model')

exports.consultar = async(req, res)=>{
    let listaProducto = await modeloProducto.find({});
    console.log(listaProducto)
    if (listaProducto){
        res.json(listaProducto);
    }else{
        res.json({"Error": "Hubo un error"})
    }

}

exports.editar = async(req, res)=>{}