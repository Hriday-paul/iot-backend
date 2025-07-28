import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constants";
import req_validator from "../../middleware/req_validation";
import { createEdgeCategoryValidator, createEdgeSignalValidator } from "./edge_signals.validator";
import { edge_signal_controller } from "./edge_signals.controller";
import { edge_categories_controller } from "../edge_categories/edge_categories.controller";
import { single_image_Upload } from "../user/user.rout";
import parseData from "../../middleware/parseData";

const router = Router();

router.post(
    '/',
    createEdgeSignalValidator,
    req_validator(),
    auth(USER_ROLE.user),
    edge_signal_controller.addEdge_signal,
);
router.get(
    '/',
    auth(USER_ROLE.user),
    edge_signal_controller.getMyEdge_signal,
);

router.get(
    '/categories',
    auth(USER_ROLE.user),
    edge_categories_controller.getEdge_signal_categories
);

router.post(
    '/categories',
    auth(USER_ROLE.user),
    single_image_Upload.single('icon'),
    parseData(),
    createEdgeCategoryValidator,
    req_validator(),
    edge_categories_controller.addEdge_category,
);

export const edge_signal_routes = router;