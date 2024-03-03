import Axios from "./caller.services.js";

const getAllBreads = () => {
    return Axios.get('/breads')
}

const getBread = (id) => {
    return Axios.get('/breads/'+id)
}

const updateBread = (bread) => {
    
    return Axios.patch('/breads/'+bread.id, {
        title: bread.title ,
        description: bread.description,
        img: bread.img,
        method_of_conservation: bread.method_of_conservation,
        composition: bread.composition,
        nutritional_values: bread.nutritional_values,
        allergens: bread.allergens
    })
}

const deleteBread = (id) => {
    return Axios.delete('/breads/'+id);
}

export const breadServices = {
    getAllBreads,
    getBread,
    updateBread,
    deleteBread
}