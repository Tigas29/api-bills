type propsCategory = {
  id?: string;
  title: string;
  color: string;
};

export class Category {
  // public represent that the istance will be able to acess this item.
  //private istance represent the istance will not be ableto acess this item
  public id?: string;
  public title: string;
  public color: string;

  constructor({ id, title, color }: propsCategory) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

const item1 = new Category({
  color: '#000000',
  title: 'teste',
});
