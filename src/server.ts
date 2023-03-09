import 'reflect-metadata' // must be imported to use tsyringe

import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { router } from './routes'
import swaggerFile from './swagger.json'

import './database'

import './shared/containers' // must be below of database import

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3333, () => console.log('🚀 Server is running 🚀'))
