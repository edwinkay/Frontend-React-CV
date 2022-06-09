import { useEffect, useState } from 'react'
import { Api } from '../services/Api';

export const useProfileList = () => {
    const [profiles, setProfiles] = useState(null)

    const getProfiles = async () => {
        const profileList = await Api.getProfiles()
        setProfiles(profileList)
    }

    useEffect(() => {
        getProfiles()
    }, [])

    useEffect(() => {
        console.log(profiles)
    }, [profiles])

    return {
        profiles
    }
}