import { CategoriesRepository } from '../../repositories/CategoriesRepository'

import { CreateCategoryControler } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryControler = new CreateCategoryControler(
  createCategoryUseCase,
)

export { createCategoryControler }
