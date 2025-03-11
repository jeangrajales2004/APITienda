const modeloVendedor = require('../models/vendedor.model');
const modeloUsuario = require('../models/usuario.model');

exports.registrar = async (req, res)=>{
    const nuevoUsuario = new modeloUsuario({
        correo: "jeancg2004",
        contrasena: "12345678",
        rol: "vendedor"
    })

    let resul = await nuevoUsuario.save();
    console.log(resul)

    const nuevoVendedor = new modeloVendedor({
        nombre: "jean",
        documento: "12345678",
        ventars: 0,
        userId: resul._id
    })
    let resultado = await nuevoVendedor.save()
    res.end()
}