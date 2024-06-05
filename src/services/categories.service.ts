import { Category } from '../entities/category.entity';

export class CategoriesService {
  async create(): Promise<Category> {
    const category = await new Category({
      title: 'title',
      color: '#ffff',
    });

    return category;
  }
}
