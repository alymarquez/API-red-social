const {Post, Post_Images, Tag, User, Comment} = require('../db/models')
const { crearImagen } = require('./postImagesController')

const crearPublicacion = async (req, res) => {
    try{
        const { userId, content, imagenes } = req.body
        const user = await User.findByPk(userId)
        
        if(!user){
            return res.status(404).json({message:"Usuario inexistente"})
        }
        const publicacion = await Post.create({ userId, content })

        if (imagenes) {
            for (const imagen of imagenes) {
                await crearImagen(imagen.url, publicacion.id)
            }
        }
    
        const publicacionConImagenes = await Post.findByPk(publicacion.id, {
            include: [Post_Images]
        })
    
        res.status(200).json(publicacionConImagenes)
    }catch(error){
        console.error(error)
        return res.status(500).json({ error: 'Error al crear publicación' })
    }
}


const obtenerPublicaciones = async (req, res) => {
    const publicaciones = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['nickName', 'email']
            },
            {
                model: Comment,
                attributes: ['comment']
            },
            {
                model: Post_Images, 
                attributes: ['url']
            },
            {
                model: Tag, 
                attributes: ['tag']
            }
        ]
    });
    res.status(200).json(publicaciones);
};

const obtenerPublicacionPorId = async (req, res) => {
    try {
        const id = req.params.id
        const publicacion = await Post.findByPk(id, {
            include: [
                {
                    model: User,
                    attributes: ['nickName', 'email']
                },
                {
                    model: Comment,
                    attributes: ['comment']
                },
                {
                    model: Post_Images, 
                    attributes: ['url']
                },
                {
                    model: Tag, 
                    attributes: ['tag']
                }
            ]
        });

        if (!publicacion) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }

        res.status(200).json(publicacion);

    } catch (error) {
        console.error('Error al obtener la publicación por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener la publicación', error: error.message });
    }
};


const actualizarPublicacion = async (req, res) => {
    try {
        const id = req.params.id
        const publicacion = await Post.findByPk(id)
        const { userId, content, imagenes } = req.body
        const usuario = await Post.findByPk(userId)

        if (!publicacion) {
            return res.status(404).json({ message: `No existe publicacion con ID: ${id}` })
        }
        if (!usuario){
            return res.status(404).json({ message: `No existe usuario con ID: ${userId}` })
        }

        await Post_Images.destroy({
            where: { postId: publicacion.id }
        });

        if(imagenes){
            for(const imagen of imagenes){
                await crearImagen(imagen.url, publicacion.id)
            }
        }

        publicacion.userId = userId
        publicacion.content = content
        await publicacion.save()

        const publicacionConImagenes = await Post.findByPk(publicacion.id, {
            include: [Post_Images]
        })
    
        res.status(200).json(publicacionConImagenes)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al actualizar publicación' })
    }
}

const eliminarPublicacion = async (req,res)=>{
    try {
        const id = req.params.id
        const publicacion = await Post.findByPk(id)
    
        if(!publicacion){
            return res.status(404).json({message: "Publicacion no encontrada"})
        }
        
        await publicacion.destroy()
        res.status(200).json({message: "Publicacion eliminada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al eliminar publicación' })
    }
}

const eliminarImagen = async (req,res)=>{
    try {
        const {id, imageId} = req.params
        const publicacion = await Post.findByPk(id)
        const imagen = await Post_Images.findOne({ where: { id: imageId, postId: id } })
    
        if(!publicacion || !imagen){
            return res.status(404).json({message: "Publicacion o imagen no encontrada"})
        }
    
        await imagen.destroy()
        res.status(200).json({message: "Imagen eliminada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al eliminar imagen' })
    }
}

const actualizarImagen = async (req,res)=>{
    try {
        const { id, imageId } = req.params
        const publicacion = await Post.findByPk(id)
        const imagen = await Post_Images.findOne({ where: { id: imageId, postId: id } })
        
        if(!publicacion || !imagen){
            return res.status(404).json({message: `No existe publicacion o imagen`})
        }
        const { url } = req.body
        imagen.url = url
        await imagen.save()
        res.status(200).json(imagen)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al actualizar imagen' })
    }
}


const asociarTagAPost = async (req, res) => {
    try {
        const { postId, tagId } = req.params

        const post = await Post.findByPk(postId)
        const tag = await Tag.findByPk(tagId)

        if(!post || !tag) {
            return res.status(404).json({ error: 'Post o Tag no encontrado' })
        }
        
        const tagsYaAsociados = await post.getTags()
        const tagYaExiste = tagsYaAsociados.some(unTag => unTag.id === tag.id)
        if(tagYaExiste){
            return res.status(500).json({ error: 'El Tag ya está asociado a este Post' })
        }

        await post.addTag(tag)

        return res.status(201).json({ message: 'Tag asociado correctamente al Post' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al asociar el tag al post' })
    }
}

const desasociarTagDePost = async (req, res) => {
    try {
        const { tagId } = req.body;
        const postId = req.params.id;

        const post = await Post.findByPk(postId);
        const tag = await Tag.findByPk(tagId);

        if (!post || !tag) {
            return res.status(404).json({ error: 'Post o Tag no encontrado' });
        }

        //Verifico si existe en la tabla intermedia
        const tagsAsociados = await post.getTags()
        const yaEstaAsociado = tagsAsociados.some(t => t.id === tag.id);
        if(!yaEstaAsociado){
            return res.status(404).json({ error: 'El Tag no está asociado a este Post' })
        }

        await post.removeTag(tag);
        return res.status(200).json({ message: 'Tag eliminado correctamente del Post' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar el tag del post' });
    }
};

const obtenerTagsDeUnPost = async (req, res) => {
    try{
        const postId = req.params.id
        const post = await Post.findByPk(postId)

        if(!post){
            return res.status(404).json({ error: 'Post no encontrado' })
        }

        const tags = await post.getTags()
        return res.status(200).json(tags)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al obtener los tags del post' })
    }
}

module.exports = {
    crearPublicacion,
    obtenerPublicaciones,
    obtenerPublicacionPorId,
    actualizarPublicacion,
    eliminarPublicacion,
    eliminarImagen,
    actualizarImagen,
    asociarTagAPost,
    desasociarTagDePost,
    obtenerTagsDeUnPost
}