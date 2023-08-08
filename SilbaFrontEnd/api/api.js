
import axios from "axios"


const api = axios.create({
    baseURL: 'https://silba-be.onrender.com/api'
})


export const getBusinesses = async () => {
    const res = await api.get('/business')
    return res.data
}
