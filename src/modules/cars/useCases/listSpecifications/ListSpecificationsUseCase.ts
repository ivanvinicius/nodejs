import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../../repositories/implementations/ISpecificationsRepository'

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list()
  }
}

export { ListSpecificationsUseCase }
