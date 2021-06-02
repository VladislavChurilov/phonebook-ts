export interface IContact {
  name: string;
  number: string;
  id: string;
}
export interface IRegistr {
  name: string | null;
  email: string | null;
  password?: string | null;
}

export interface ILogIn {
  email: string | null;
  password: string | null;
}
