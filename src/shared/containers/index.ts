import { container } from 'tsyringe'

import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)
