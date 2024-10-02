import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TodoServices } from "./todo.service";

const getAll = catchAsync(async (req, res) => {
  const result = await TodoServices.getAll();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todos retrieved successfully",

    data: result,
  });
});
const getSingle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TodoServices.getSingle(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo retrieved successfully",

    data: result,
  });
});

const create = catchAsync(async (req, res) => {
  const result = await TodoServices.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo created successfully",

    data: result,
  });
});
const softDelete = catchAsync(async (req, res) => {
  const { id } = req.params;
  await TodoServices.softDelete(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo deleted successfully",

    data: null,
  });
});
const permanentDelete = catchAsync(async (req, res) => {
  const { id } = req.params;
  await TodoServices.permanentDelete(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo deleted successfully",

    data: null,
  });
});
const update = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TodoServices.update(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo updated successfully",

    data: result,
  });
});

export const TodoControllers = {
  getAll,
  getSingle,create,
  softDelete,
  permanentDelete,
  update,
};
