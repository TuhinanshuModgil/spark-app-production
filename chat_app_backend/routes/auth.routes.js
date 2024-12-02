import express from "express";
import { login, logout, sendMailVerfication, signup, checkLogin } from "../controllers/auth.controller.js";
import verifyEmail  from '../middleware/verifyingInstituteEmail.js'
import { addInstitute, getAllInstitutes } from "../controllers/institue.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/signup",verifyEmail,  signup);
router.post("/email-verification", sendMailVerfication);
router.get("/institutes", getAllInstitutes).post("/institutes", addInstitute);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check-login", protectRoute, checkLogin)
; // New route for email verification


export default router;
