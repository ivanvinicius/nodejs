import { Router, Request, Response } from 'express'

import { SpecificationsRepository } from '../repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../services/CreateSpecificationService'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  const createSpecifictionService = new CreateSpecificationService(
    specificationsRepository,
  )

  createSpecifictionService.execute({ name, description })

  return res.status(201).json()
})

specificationsRoutes.get('/', (req: Request, res: Response) => {
  const specifications = specificationsRepository.list()

  return res.status(200).json(specifications)
})

export { specificationsRoutes }
