import express  from 'express';
var router = express.Router();
import {Home} from '../app/controllers/cpanel/Home.js';
router.get('/',Home.index)

export default router;