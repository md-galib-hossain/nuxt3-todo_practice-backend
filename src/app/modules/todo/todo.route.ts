import { Router } from "express";
import { TodoControllers } from "./todo.controller";
import validateRequest from "../../middlewares/validateRequest";
import { TodoValidation } from "./todo.validation";

const router = Router();
// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model
router.get("/", TodoControllers.getAll);
router.get("/:id", TodoControllers.getSingle);
router.post(
  "/",
  validateRequest(TodoValidation.todoAdd),
  TodoControllers.create
);
router.patch(
  "/:id",
  validateRequest(TodoValidation.todoUpdate),
  TodoControllers.update
);
router.patch("/soft-delete/:id", TodoControllers.softDelete);
router.delete("/:id", TodoControllers.permanentDelete);

export const TodoRoutes = router