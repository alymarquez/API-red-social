const {Post_Images, Post} = require('../db/models')

const crearImagen = async (url, postId) => {
    const post = await Post.findByPk(postId)
    if (!post) throw new Error('Post no encontrado')
    const imagen = await Post_Images.create({ url, postId })
    return imagen
}

const crearImagenPost = async (req, res) => { 
    try {
        const { postId, url } = req.body
        const post = await Post.findByPk(postId)
        
        if(!post){
            return res.status(404).json({message:"Post inexistente"})
        }
        
        const count = await Post_Images.count({ where: { postId } })
        if (count >= 5) {
            return res.status(400).json({ message: "El post ya tiene el máximo de 5 imágenes" })
        }

        const imagen = await crearImagen(url, postId)
        res.status(201).json(imagen)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al crear Imagen' })
    }
}

const mostrarImagenes = async (req, res) => {
    const imagenes = await Post_Images.findAll()
    res.status(200).json(imagenes)
}

const actualizarImagen = async (req,res)=>{
    try {
        const id = req.params.id
        const imagen = await Post_Images.findByPk(id)

        if(!imagen){
            return res.status(404).json({message: `No existe Imagen con ID: ${id}`})
        }

        const { url } = req.body
        imagen.url = url
        await imagen.save()
        res.status(200).json(imagen)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al actualizar Imagen' })
    }
}

const eliminarImagen = async (req,res)=>{
    try {
        const id = req.params.id
        const imagen = await Post_Images.findByPk(id)

        if(!imagen){
            return res.status(404).json({message: `No existe Imagen con ID: ${id}`})
        }
        
        await imagen.destroy()
        res.status(200).json({message: "Imagen eliminada"})

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al eliminar Imagen' })
    }
}

module.exports = {
    crearImagen,
    crearImagenPost,
    mostrarImagenes,
    actualizarImagen,
    eliminarImagen
}