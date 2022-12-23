export default async function getData(url,setState){
    const res = await fetch(url)
    const data = await res.json()
    setState(data)
    return data
}