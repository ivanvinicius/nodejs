import { Specification } from '../Model/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void
  list(): Specification[]
  findByName(name: string): Specification
}

export { ICreateSpecificationDTO, ISpecificationsRepository }
