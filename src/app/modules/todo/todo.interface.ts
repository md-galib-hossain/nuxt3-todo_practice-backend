export interface ITodo {
    _id?: string;
    title: string;
    description: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt?: Date; 
}