import express from "express";
import multer from "multer";
var router = express.Router();
import {auth} from '../app/controllers/cpanel/Auth.js';
// =================================================
import {validation} from '../app/helper/validate.js';

router.post('/login',multer().none(),validation(),auth.login);
export default router;