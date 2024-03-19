import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <section>
      <h1>Admin-Seite</h1>
      <br />
      <p>Ihnen muss eine Administratorrolle zugewiesen sein.</p>
      <div className='flexGrow'>
        <Link to='/'>Hauptseite</Link>
      </div>
    </section>
  )
}

export default Admin
