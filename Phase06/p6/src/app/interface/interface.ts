export default interface Book {
  id?: string;
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
  
//   isbn: string;
//   book_title: string;
//   book_author: string;
//   year_of_publication: number;
//   publisher: string;
//   image_url_s: string;
//   image_url_m: string;
//   image_url_l: string;
}

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
