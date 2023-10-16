import City from '../models/City.js';


export const getCityById = async(req, res, next) => {
    const {id} = req.params;
    try {
        const city = await City.findById(id);
        if (!city) {
            throw {statusCode: 404, message: 'City not found'}
        }
        res.send(city);
    } catch (error) {
        next(error);
    }
};