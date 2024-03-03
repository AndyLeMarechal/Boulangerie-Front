import Axios from "./caller.services.js";

const getAllSaltySides = () => {
    return Axios.get('/saltySides')
}

const getSaltySide = (id) => {
    return Axios.get('/saltySides/'+id)
}

const updateSaltySide = (saltySide) => {
    
    return Axios.patch('/saltySides/'+saltySide.id, {
        title: saltySide.title ,
        description: saltySide.description,
        img: saltySide.img,
        method_of_conservation: saltySide.method_of_conservation,
        composition: saltySide.composition,
        nutritional_values: saltySide.nutritional_values,
        allergens: saltySide.allergens
    })
}

const deleteSaltySide = (id) => {
    return Axios.delete('/saltySides/'+id);
}

export const saltySidesServices = {
    getAllSaltySides,
    getSaltySide,
    updateSaltySide,
    deleteSaltySide
}