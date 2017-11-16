import express from 'express'
import middlewares from './middlewares'
import router from './routes'

const app = express()

/* MIDDLEWARES  */
middlewares(app)

/* ROUTES */
app.use('/', router)

export default app
