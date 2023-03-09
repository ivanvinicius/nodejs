import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryControler } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

const createCategoryController = new CreateCategoryControler()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()

const categoriesRoutes = Router()
const upload = multer({ dest: './tmp' })

categoriesRoutes.get('/', listCategoriesController.handle)

categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
)

export { categoriesRoutes }
