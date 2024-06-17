type propsCategory = {
  _id?: string;
  title: string;
  color: string;
};

export class Category {
  // public represent that the istance will be able to acess this item.
  //private istance represent the istance will not be ableto acess this item
  public _id?: string;
  public title: string;
  public color: string;

  constructor({ _id, title, color }: propsCategory) {
    this._id = _id;
    this.title = title;
    this.color = color;
  }
}
