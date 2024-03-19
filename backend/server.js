// Laden der Umgebungsvariablen aus der .env-Datei
require('dotenv').config()

// Importieren der benötigten Module
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const credentials = require('./middleware/credentials')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const PORT = process.env.PORT || 3500

// Verbindung zur MongoDB herstellen
connectDB()

// Eigenes Middleware-Modul für das Logging
app.use(logger)

// Überprüfung der Optionen für CORS und Verarbeitung von Cookies

app.use(credentials)

// Cross-Origin Resource Sharing aktivieren
app.use(cors(corsOptions))

// Middleware für das Verarbeiten von urlcodierten Formulardaten
app.use(express.urlencoded({ extended: false }))

// Middleware für JSON-Daten
app.use(express.json())

// Middleware für Cookies
app.use(cookieParser())

// Statische Dateien servieren
app.use('/', express.static(path.join(__dirname, '/public')))

// Routen
app.use('/', require('./routes/root'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))

// JWT-Verifizierung für bestimmte Routen
app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'))
app.use('/users', require('./routes/api/users'))

// Fallback für unbekannte Routen
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

// Globale Fehlerbehandlung
app.use(errorHandler)

// Bei erfolgreicher Verbindung zur MongoDB den Server starten
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
