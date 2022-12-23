import axios from "axios"

export default async function handleSubmit(e, url, data, setData, setUser, navigate){
    e.preventDefault()
    
    try {
        const res = await axios.post(url, data)
        localStorage.setItem('user', JSON.stringify(res.data))
        setUser(res.data)
        navigate('/')
    } catch (error) {
        console.log(error)
    }

    const newData = {...data}
    
    for(let prop in newData){
        newData[prop] = ""
    }

    setData(newData)
}