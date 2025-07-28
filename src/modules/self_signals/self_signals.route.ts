import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constants";
import { createSelfSignalValidator } from "./self_signals.validator";
import req_validator from "../../middleware/req_validation";
import { self_signal_controller } from "./self_signals.controller";

const router = Router();

router.post(
    '/',
    createSelfSignalValidator,
    req_validator(),
    auth(USER_ROLE.user),
    self_signal_controller.addSelf_signal,
);
router.get(
    '/',
    auth(USER_ROLE.user),
    self_signal_controller.getMySelf_signal,
);

export const self_signal_routes = router;