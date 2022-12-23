import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


import handleFillingForm from '../helpers/handleFillingForm'
import handleSubmit from '../helpers/handleSubmit'

const SIGNIN_URL = "http://localhost:5000/api/users/login/"

export default function SignIn({setUser}){
    const [signinData, setSigninData] = useState({ email:"", password:""})
    const navigate = useNavigate()


    return(
        <main className="sign-comp">
            <h2 className="title">MovieMeter</h2>
            <form onSubmit={(e)=> handleSubmit(e, SIGNIN_URL, signinData, setSigninData, setUser, navigate)} className="sign-form">
                <label htmlFor="email">Email</label>
                <input 
                    name="email"
                    value={signinData.email}
                    onChange={(e)=> handleFillingForm(e, setSigninData)}
                    type="email" 
                    placehoder="Email" 
                />
                <label htmlFor="password">Password</label>
                <input 
                    name="password"
                    value={signinData.password}
                    onChange={(e)=> handleFillingForm(e, setSigninData)}
                    type="password" 
                    placehoder="Password" 
                />
                <input 
                    type="submit" 
                    value="Sign in" 
                    className="sign-btn"
                />
            </form>
        </main>
    )
}