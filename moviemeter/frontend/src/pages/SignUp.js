import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


import handleFillingForm from '../helpers/handleFillingForm'
import handleSubmit from '../helpers/handleSubmit'

const SIGNUP_URL = "http://localhost:5000/api/users/"

export default function SignUp({setUser}){
    const [signupData, setSignupData] = useState({name:"", email:"", password:""})
    const navigate = useNavigate()


    return(
        <main className="sign-comp">
            <h2 className="title">MovieMeter</h2>
            <form onSubmit={(e)=> handleSubmit(e, SIGNUP_URL, signupData, setSignupData, setUser, navigate)} className="sign-form">
                <label htmlFor="name">Name</label>
                <input 
                    name="name"
                    value={signupData.name}
                    onChange={(e)=> handleFillingForm(e, setSignupData)}
                    type="text" 
                    placehoder="name" 

                />
                <label htmlFor="email">Email</label>
                <input 
                    name="email"
                    value={signupData.email}
                    onChange={(e)=> handleFillingForm(e, setSignupData)}
                    type="email" 
                    placehoder="Email" 
                />
                <label htmlFor="password">Password</label>
                <input 
                    name="password"
                    value={signupData.password}
                    onChange={(e)=> handleFillingForm(e, setSignupData)}
                    type="password" 
                    placehoder="Password" 
                />
                <input 
                    type="submit" 
                    value="Sign up" 
                    className="sign-btn"
                />
            </form>
        </main>
    )
}