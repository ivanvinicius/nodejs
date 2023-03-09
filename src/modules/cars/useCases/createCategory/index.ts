import { CategoriesRepository } from '../../repositories/CategoriesRepository'

import { CreateCategoryControler } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export default (): CreateCategoryControler => {
  const categoriesRepository = new CategoriesRepository()
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  const createCategoryControler = new CreateCategoryControler(
    createCategoryUseCase,
  )

  return createCategoryControler
}
