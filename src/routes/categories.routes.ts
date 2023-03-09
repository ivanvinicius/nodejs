import { Router, Request, Response } from 'express'
import multer from 'multer'

import createCategoryControler from '../modules/cars/useCases/createCategory'
import listCategoriesController from '../modules/cars/useCases/listCategories'
import importCategoryController from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()
const upload = multer({ dest: './tmp' })

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryControler().handle(req, res)
})

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (req: Request, res: Response) => {
    return importCategoryController().handle(req, res)
  },
)

categoriesRoutes.get('/', (req: Request, res: Response) => {
  return listCategoriesController().handle(req, res)
})

export { categoriesRoutes }
