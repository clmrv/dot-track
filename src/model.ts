export type User = {
  id: string;
  name: string;
  color: string;
};

export type Household = {
  users: User[];
  categories: Category[];
};

export type Dot = {
  date: Date;
  userId: User["id"];
};

export type Category = {
  id: string;
  label: string;
  dots: Dot[];
};
