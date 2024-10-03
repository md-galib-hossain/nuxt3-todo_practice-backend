import { model, Schema } from "mongoose";
import { ITodo } from "./todo.interface";
import { requiredString } from "./todo.constant";


const todoSchema = new Schema<ITodo>(
    {
        title: requiredString,
        description: requiredString,
        completed: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true,  
    }
)

export const Todo = model<ITodo>('Todo',todoSchema)