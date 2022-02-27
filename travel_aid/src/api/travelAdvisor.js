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
        'x-rapidapi-key': 'bef4352992mshb4ee6f9d227b044p11e2f5jsndbf97476510a' 
        }
    })
    return data
    } catch (error) {
        console.log (`Omooo. E choke. Dem say ${error}`)
    }
}

