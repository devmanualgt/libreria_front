export interface Book {
    id:           number;
    createdAt:    Date;
    updatedAt:    Date;
    title:        string;
    author:       string;
    isbn:         string;
    publish_year: number;
    copies:       number;
    quantity:     number;
    link_img:     string;
    topics:       string;
    usersOnBook:  UsersOnBook[];
}

export interface UsersOnBook {
    id:            number;
    createdAt:     Date;
    updatedAt:     Date;
    returnDate?:    Date;
    loanTerminate: boolean;
    user:          User;
}

export interface User {
    id:        number;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName:  string;
    age:       number;
    email:     string;
    username:  string;
    role:      string;
}
