import { z } from "zod";
import { addTodoZodRequiredStringSchema } from "./todo.constant";

const todoAdd = z.object({
    body:  z.object({
        title: addTodoZodRequiredStringSchema('title'),
        description: addTodoZodRequiredStringSchema('description')
    })
})
const todoUpdate = z.object({
    body:  z.object({
        title: addTodoZodRequiredStringSchema('title').optional(),
        description: addTodoZodRequiredStringSchema('description').optional(),
        completed: z.boolean().optional()
    })
})

export const TodoValidation= {todoAdd,todoUpdate}