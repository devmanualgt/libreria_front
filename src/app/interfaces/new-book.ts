export interface newBook {
    title:        string;
    author:       string;
    isbn:         string;
    publish_year: string;
    copies:       string;
    quantity:     number;
    topics:       string;
    id?:           number;
    createdAt?:    Date;
    updatedAt?:    Date;
    link_img?:     string;
}
