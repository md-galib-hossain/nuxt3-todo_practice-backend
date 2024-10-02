import { z } from "zod";
import { addTodoZodRequiredStringSchema } from "./todo.constant";

const todoAdd = z.object({
    body:  z.object({
        title: addTodoZodRequiredStringSchema('title'),
        description: addTodoZodRequiredStringSchema('description')
    })
})

export const TodoValidation= {todoAdd}