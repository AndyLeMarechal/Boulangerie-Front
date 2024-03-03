import Axios from "./caller.services.js";

const getAllOurBakerys = () => {
    return Axios.get('/ourBakerys')
}

const getOurBakery = (id) => {
    return Axios.get('/ourBakerys/'+id)
}

const updateOurBakery = (ourBakery) => {
    
    return Axios.patch('/ourBakerys/'+ourBakery.id, {
        title: ourBakery.title ,
        description: ourBakery.description,
        img: ourBakery.img,
        hourly: ourBakery.hourly,
        city: ourBakery.city,
        address: ourBakery.address,
        zip_code: ourBakery.zip_code
    })
}

const deleteOurBakery = (id) => {
    return Axios.delete('/ourBakerys/'+id);
}

export const ourBakerysServices = {
    getAllOurBakerys,
    getOurBakery,
    updateOurBakery,
    deleteOurBakery
}