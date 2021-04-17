import { Router } from "express";

import GetUserDataInstagramController from "./controllers/GetUserDataInstagramController";

const router = Router();

router.get('/user/data/instagram', GetUserDataInstagramController);

export default router;

