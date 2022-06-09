import axios from 'axios'

export class Api {
    static getProfiles = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        return response.data.results
    }
}