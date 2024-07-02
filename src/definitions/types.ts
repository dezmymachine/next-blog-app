export type feature = {
  title: string;
  content: string;
  image: string;
  createdAt: string;
  id?: string;
};

export type Blog = {
  title: string;
  content: string;
  image: string | null;
  createdAt: Date;
  id: string;
}