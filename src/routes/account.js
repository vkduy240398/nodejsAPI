import express from 'express';
const router = express.Router();
import  {Account}  from '../app/controllers/cpanel/Account.js';
// =========================================================
import {middleware} from '../app/helper/middleware.js';
router.get('/',middleware.verifyToken,Account.index)
export default router