import { Link } from 'react-router-dom'

const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Öffentlich</h2>
      <Link to='/login'>Anmeldung</Link>
      <Link to='/register'>Registrierung</Link>
      <br />
      <h2>Privat</h2>
      <Link to='/'>Hauptseite</Link>
      <Link to='/editor'>Editor-Seite</Link>
      <Link to='/admin'>Admin-Seite</Link>
    </section>
  )
}

export default LinkPage
