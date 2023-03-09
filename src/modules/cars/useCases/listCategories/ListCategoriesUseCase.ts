import { Category } from '../../entities/Category'
import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list()
  }
}

export { ListCategoriesUseCase }
