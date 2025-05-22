const {User} = require('../db/models')

const crearUsuario = async (req, res) => { 
    try {
        const { nickName,email } = req.body
        const usuario = await User.create({nickName, email})
        res.status(200).json(usuario)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al crear Usuario' })
    }
}

const mostrarUsuarios = async (req, res) => {
    const usuarios = await User.findAll()
    res.status(200).json(usuarios)
}

const actualizarUsuario = async (req,res)=>{
    try {
        const id = req.params.id
        const usuario = await User.findByPk(id)

        if(!usuario){
            return res.status(404).json({message: `No existe el usuario con ID: ${id}`})
        }

        const { nickName, email } = req.body
        usuario.nickName = nickName
        usuario.email = email
        usuario.updatedAt = new Date().toISOString();
        await usuario.save()
        res.status(200).json(usuario)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al actualizar usuario' })
    }
}

const eliminarUsuario = async (req,res)=>{
    try {
        const id = req.params.id
        const usuario = await User.findByPk(id)

        if(!usuario){
            return res.status(404).json({message: `No existe el usuario con ID: ${id}`})
        }
        await usuario.destroy()
        res.status(200).json({message: "Usuario eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al eliminar usuario' })
    }
}

const seguirUsuario = async (req,res) => {
    try {
        const userId = req.params.id
        const { seguidoId } = req.body

        const user = await User.findByPk(userId)
        const usuarioSeguido = await User.findByPk(seguidoId)
        
        if(!user || !usuarioSeguido) {
            return res.status(404).json({ error: 'Usuario/s no encontrado/s' })
        }
        if(userId == seguidoId){
            return res.status(404).json({ error: 'No puedes seguirte a ti mismo' })
        }
        
        const seguidos = await user.getSeguidos()
        const yaLoSigue = seguidos.some(unUser => unUser.id === seguidoId)
        if(yaLoSigue){
            return res.status(404).json({ error: 'Ya sigues a este usuario' })
        }

        await user.addSeguido(seguidoId)

        return res.status(201).json({ message: 'Has seguido correctamente a este usuario' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al seguir al usuario' })
    }    
}

const dejarDeSeguirUsuario = async (req,res) => {
    try {
        const userId = req.params.id
        const { seguidoId } = req.body

        const user = await User.findByPk(userId)
        const usuarioSeguido = await User.findByPk(seguidoId)
        
        if(!user || !usuarioSeguido) {
            return res.status(404).json({ error: 'Usuario/s no encontrado/s' })
        }
        
        const seguidos = await user.getSeguidos()
        const noLoSigues = !seguidos.some(unUser => unUser.id === seguidoId)
        if(noLoSigues){
            return res.status(404).json({ error: 'No sigues a este usuario' })
        }

        await user.removeSeguido(seguidoId)

        return res.status(200).json({ message: 'Has dejado de seguir a este usuario' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al dejar de seguir a usuario' })
    }    
}

module.exports = {
    crearUsuario,
    mostrarUsuarios,
    actualizarUsuario,
    eliminarUsuario,
    seguirUsuario,
    dejarDeSeguirUsuario
}