import { Request, Response } from 'express';
import { CategoriesService } from '../services/categories.service';
import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../database/schemas/category.schema';

export class CategoriesCrontoller {
  public async create(_: Request, res: Response) {
    const service = new CategoriesService(
      new CategoriesRepository(CategoryModel)
    );

    const result = await service.create();
    return res.status(201).jsonp(result);
  }
}
