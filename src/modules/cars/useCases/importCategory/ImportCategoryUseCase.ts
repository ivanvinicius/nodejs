import fs from 'fs'
import { parse } from 'csv-parse'
import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

interface IImportedCategory {
  name: string
  description: string
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportedCategory[]> {
    return new Promise((resolve, reject) => {
      const importedCategories: IImportedCategory[] = []
      const stream = fs.createReadStream(file.path)
      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [name, description] = line

          importedCategories.push({ name, description })
        })
        .on('end', () => {
          resolve(importedCategories)
          fs.promises.unlink(file.path)
        })
        .on('error', (err) => reject(err))
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async ({ name, description }) => {
      const categoryAlreadyExists = await this.categoriesRepository.findByName(
        name,
      )

      if (!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description })
      }
    })
  }
}

export { ImportCategoryUseCase }
