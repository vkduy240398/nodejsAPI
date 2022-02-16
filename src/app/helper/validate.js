import { body } from 'express-validator';
export  const validation = () =>{
    return [
        body('username').notEmpty().withMessage('Không được để trống'),
        body('password').notEmpty().withMessage('Không được để trống')
    ];
}