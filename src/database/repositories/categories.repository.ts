//config acesasndo o mongo e fazer oque tem que fazer
import { Category } from '../../entities/category.entity';
import { CategoryModel } from '../schemas/category.schema';
export class CategoriesRepository {
  // when we have a specific type, we dont have to remake it, we could use
  // typeof and the name of the class

  constructor(private model: typeof CategoryModel) {}

  async create({ title, color }: Category) {
    const createdCategory = await this.model.create({
      color: color,
      title: title,
    });

    return createdCategory.toObject<Category>();
  }
}
