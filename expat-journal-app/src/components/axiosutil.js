import axios from 'axios'

export const axiosWithoutAuth = () => {

    return (
        axios.create({
            baseURL: 'https://be-expat-journal.herokuapp.com/api'
        })
    )
}

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'))

    return(
        axios.create({
            baseURL: 'https://be-expat-journal.herokuapp.com/api',
            headers: {
                "Authorization" : token,
                "Content-Type" : 'application/json'
            }
        })
    )
}