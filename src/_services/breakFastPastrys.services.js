import Axios from "./caller.services.js";

const getAllBreakFastPastrys = () => {
    return Axios.get('/breakfastPastrys')
}

const getBreakFastPastry = (id) => {
    return Axios.get('/breakfastPastrys/'+id)
}

const updateBreakFastPastry = (breakFastPastry) => {
    
    return Axios.patch('/breakfastPastrys/'+breakFastPastry.id, {
        title: breakFastPastry.title ,
        description: breakFastPastry.description,
        img: breakFastPastry.img,
        method_of_conservation: breakFastPastry.method_of_conservation,
        composition: breakFastPastry.composition,
        nutritional_values: breakFastPastry.nutritional_values,
        allergens: breakFastPastry.allergens
    })
}

const deleteBreakFastPastry = (id) => {
    return Axios.delete('/breakfastPastrys/'+id);
}

export const BreakFastPastryservices = {
    getAllBreakFastPastrys,
    getBreakFastPastry,
    updateBreakFastPastry,
    deleteBreakFastPastry
}