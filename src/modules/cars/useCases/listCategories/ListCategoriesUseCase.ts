import { Category } from '../../models/Category'
import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list()
  }
}

export { ListCategoriesUseCase }
