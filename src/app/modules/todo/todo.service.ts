import httpStatus from "http-status";
import AppError from "../../errors/App.Error";
import { Todo } from "./todo.model";
import { ITodo } from "./todo.interface";

const getAll = async () => {
  const result = await Todo.find({isDeleted: false}).sort({ completed: 1, createdAt: -1 });
  return result;
};

const getSingle = async (id: string) => {
  const result = await Todo.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Todo not found");
  }
  return result;
};

const create = async (payload: Partial<ITodo>) => {
  const result = await Todo.create(payload);
  return result;
};

const softDelete = async (id: string) => {
  await Todo.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true }
  );
};
const permanentDelete = async (id: string) => {
  const exists = await Todo.findById(id);
  if (!exists)
    throw new AppError(httpStatus.NOT_FOUND, "There is no todo with this id");
  await Todo.deleteOne({ _id: id });
};

const update = async (id: string, data: Partial<ITodo>) => {
  const exists = await Todo.findById(id);
  if (!exists)
    throw new AppError(httpStatus.NOT_FOUND, "There is no todo with this id");
  const result = await Todo.findByIdAndUpdate(
    id,

    data,

    {
      new: true,
    }
  );
  return result;
};

export const TodoServices = {
  getAll,
  getSingle,
  create,
  softDelete,
  permanentDelete,
  update,
};
