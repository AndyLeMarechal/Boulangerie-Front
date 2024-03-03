import Axios from "./caller.services.js";

const getAllPastries = () => {
    return Axios.get('/pastries')
}

const getPastrie = (id) => {
    return Axios.get('/pastries/'+id)
}

const updatePastrie = (pastrie) => {
    
    return Axios.patch('/pastries/'+pastrie.id, {
        title: pastrie.title ,
        description: pastrie.description,
        img: pastrie.img,
        method_of_conservation: pastrie.method_of_conservation,
        composition: pastrie.composition,
        nutritional_values: pastrie.nutritional_values,
        allergens: pastrie.allergens
    })
}

const deletePastrie = (id) => {
    return Axios.delete('/pastries/'+id);
}

export const pastrieServices = {
    getAllPastries,
    getPastrie,
    updatePastrie,
    deletePastrie
}