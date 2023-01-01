export default function handleFillingForm(e, setData){
    const {name, value} = e.target

    setData(prev=>{
        return{
            ...prev,
            [name]: value
        }
    })
}