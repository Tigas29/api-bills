import { CategoriesRepository } from '../database/repositories/categories.repository';
import { Category } from '../entities/category.entity';

export class CategoriesService {
  constructor(private CategoriesRepository: CategoriesRepository) {}

  async create(): Promise<Category> {
    const category = new Category({
      title: 'title',
      color: '#ffff',
    });

    const createdCategory = await this.CategoriesRepository.create(category);
    return createdCategory;
  }
}
