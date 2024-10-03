export interface ITodo {
    _id?: string;
    title: string;
    description: string;
    isDeleted: boolean;
    completed: boolean;
    createdAt: Date;
    updatedAt?: Date; 
}