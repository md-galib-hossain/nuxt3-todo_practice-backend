import { z } from "zod"

export const requiredString = {
    type: String,
    required: true
}

export const addTodoZodRequiredStringSchema = (field:string)=> {
    return z.string().min(1,`${field} field can't be empty`)
}