export interface Author {
  name: string;
  profilePicture: string;
}

export interface Category {
  name: string;
}

export interface CardProps {
  id: string;
  thumbnail_url: string;
  createdAt: string;
  author: Author;
  title: string;
  content: string;
  categories: Category[];
}
