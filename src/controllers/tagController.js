const {Tag} = require('../db/models')

const crearTag = async (req, res) => { 
    try {
        const { tag } = req.body
        const etiqueta = await Tag.create({tag})
        res.status(200).json(etiqueta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al crear Tag' })
    }
}

const mostrarTag = async (req, res) => {
    const etiquetas = await Tag.findAll()
    res.status(200).json(etiquetas)
}

const actualizarTag = async (req,res)=>{
    try {
        const id = req.params.id
        const etiqueta = await Tag.findByPk(id)

        if(!etiqueta){
            return res.status(404).json({message: `No existe etiqueta con ID: ${id}`})
        }

        const { tag } = req.body
        etiqueta.tag = tag
        await etiqueta.save()
        res.status(200).json(etiqueta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al actualizar tag' })
    }
}

const eliminarTag = async (req,res)=>{
    try {
        const id = req.params.id
        const etiqueta = await Tag.findByPk(id)

        if(!etiqueta){
            return res.status(404).json({message: `No existe etiqueta con ID: ${id}`})
        }

        await etiqueta.destroy()
        res.status(200).json({message: "Etiqueta eliminada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al eliminar tag' })
    }
}

module.exports = {
    crearTag,
    mostrarTag,
    actualizarTag,
    eliminarTag
}