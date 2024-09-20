export interface TypeUser {
  status: boolean;
  message: string;
  records: Record[];
}

export interface Record {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  password: string;
  role: string;
  loans: Loans;
}

export interface Loans {
  activeLoans: any[];
  completedLoans: any[];
}

export interface UserInformation {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  password: string;
  role: string;
  loans: Loans;
}

export const userInit: UserInformation = {
  id: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  firstName: '',
  lastName: '',
  age: 0,
  email: '',
  username: '',
  password: '',
  role: '',
  loans: {
    activeLoans: [],
    completedLoans: [],
  },
};
