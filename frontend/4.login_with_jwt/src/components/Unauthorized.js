import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <section>
      <h1>Nicht autorisiert</h1>
      <br />
      <p>Sie haben keinen Zugriff auf die angeforderte Seite.</p>
      <div className='flexGrow'>
        <button onClick={goBack}>Gehe zurück</button>
      </div>
    </section>
  )
}

export default Unauthorized
