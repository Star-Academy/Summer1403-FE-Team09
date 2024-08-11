export default interface Book {
  id?: string;
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
