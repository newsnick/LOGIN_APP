import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const Home = () => {
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({})
    navigate('/linkpage')
  }

  return (
    <section>
      <h1>Hauptseite</h1>
      <br />
      <p>Du bist eingeloggt!</p>
      <br />
      <Link to='/editor'>Gehe zur Editor-Seite</Link>
      <br />
      <Link to='/admin'>Gehe zur Admin-Seite</Link>
      <br />
      <Link to='/lounge'>Gehe zur Lounge</Link>
      <br />
      <Link to='/linkpage'>Gehe zur Linkseite</Link>
      <div className='flexGrow'>
        <button onClick={logout}>Abmelden</button>
      </div>
    </section>
  )
}

export default Home
