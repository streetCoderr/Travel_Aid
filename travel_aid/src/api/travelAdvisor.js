import axios from "axios";


export const getPlaces = async (type, sw, ne) => {
    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        },
        headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'cc06000567msh3140240cbdaf59ap18a0d4jsndc4faeb74da0'
        }
    })
    return data
    } catch (error) {
        console.log (`Omooo. E choke. Dem say ${error}`)
    }
}

