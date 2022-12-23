import { Link, useNavigate } from 'react-router-dom'


export default function Header({user,setUser}){
  const navigate = useNavigate()

  const onLogout = ()=>{
      localStorage.removeItem('user')
      setUser({})
      navigate('/')
  }

  return(
    <header className='header'>
      <div className='logo'>
        <Link to='/'>MovieMeter</Link>
      </div>
      {user.name && <h2>{`Hi ${user.name}!`}</h2>}
      <ul className='signs'>
        {user.name ? (
          <li>
            <Link to='/' className='btn' onClick={onLogout}>
                Logout
            </Link>
          </li>
          
        ) : (
          <>
            <li>
              <Link to='/signin'>
                  Sign in
              </Link>
            </li>
            <li>
              <Link to='/signup'>
                  Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}