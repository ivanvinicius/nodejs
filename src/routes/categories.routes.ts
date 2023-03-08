import { Router, Request, Response } from 'express'

import { createCategoryControler } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryControler.handle(req, res)
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res)
})

export { categoriesRoutes }
