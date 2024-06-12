//config acesasndo o mongo e fazer oque tem que fazer
import { CategoryModel } from '../schemas/category.schema';
export class CategoriesRepository {
  private model: typeof CategoryModel;

  constructor(model: typeof CategoryModel) {
    this.model = model;
  }
}
