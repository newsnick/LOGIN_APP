import { Link } from 'react-router-dom'

const Lounge = () => {
  return (
    <section>
      <h1>Die Lounge</h1>
      <br />
      <p>Administratoren und Editors können hier abhängen.</p>
      <div className='flexGrow'>
        <Link to='/'>Gehe zur Hauptseite</Link>
      </div>
    </section>
  )
}

export default Lounge
