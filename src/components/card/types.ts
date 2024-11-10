export interface Author {
  name: string;
  profilePicture: string;
}

export interface Category {
  name: string;
}

export interface CardProps {
  createdAt: string;
  author: Author;
  title: string;
  description: string;
  categories: Category[];
}
