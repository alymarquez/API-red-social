const {Comment,Post,User} = require('../db/models')

const crearComentario = async (req, res) => { 
    try{
        const { postId, userId, comment } = req.body
        const post = await Post.findByPk(postId)
        const user = await User.findByPk(userId)

        if(!post || !user){
            return res.status(404).json({message:"Post o Usuario inexistentes"})
        }
        const comentario = await Comment.create({postId, userId, comment})
        res.status(200).json(comentario)
    }catch(error){
        console.error(error)
        res.status(500).json({ error: 'Error al crear comentario' })
    }
}

const mostrarComentarios = async (req, res) => {
    const meses = parseInt(process.env.ANTIGUEDAD_COMENTARIOS || '6')
    const fechaLimite = new Date()
    fechaLimite.setMonth(fechaLimite.getMonth() - meses)

    const todosLosComentarios = await Comment.findAll()

    const comentariosFiltrados = todosLosComentarios.filter(comentario => {
        return new Date(comentario.createdAt) >= fechaLimite
    })

    res.status(200).json(comentariosFiltrados)
}

const actualizarComentario = async (req,res)=>{
    try{
        const id = req.params.id
        const comentario = await Comment.findByPk(id)

        if(!comentario){
            return res.status(404).json({message: `No existe comentario con ID: ${id}`})
        }

        const { postId, userId, comment } = req.body
        comentario.postId = postId,
        comentario.userId = userId,
        comentario.comment = comment
        await comentario.save()
        res.status(200).json(comentario)

    } catch(error){
        console.error(error)
        res.status(500).json({ error: 'Error al actualizar comentario' })
    }
}

const eliminarComentario = async (req,res)=>{
    try {
        const id = req.params.id
        const comentario = await Comment.findByPk(id)
    
        if(!comentario){
            return res.status(404).json({message: `No existe comentario con ID: ${id}`})
        }
        
        await comentario.destroy()
        res.status(200).json({message: "Comentario eliminado"})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al eliminar comentario' })
    }
}

module.exports = {
    crearComentario,
    mostrarComentarios,
    actualizarComentario,
    eliminarComentario
}