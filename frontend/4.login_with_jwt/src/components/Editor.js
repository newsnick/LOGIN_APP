import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <section>
      <h1>Editor-Seite</h1>
      <br />
      <p>Ihnen muss die Rolle „Editor“ zugewiesen sein.</p>
      <div className='flexGrow'>
        <Link to='/'>Hauptseite</Link>
      </div>
    </section>
  )
}

export default Editor
