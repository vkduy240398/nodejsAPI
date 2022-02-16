import accountModels from "../../models/accountModels.js";
// ========== Hepler
import { Function } from "../../helper/function.js";
import {Op} from "sequelize";
// JSON WEB TOKEN
import jsonwebtoken from "jsonwebtoken";
// validation
import { validationResult } from 'express-validator';
export const auth ={
    async login(req,res){
        var errors = validationResult(req);
        if (errors.isEmpty()) {
            const {username,password} = req.body;
            let data = await accountModels.findOne({
                where:{
                    username:{
                        [Op.eq]:username
                    }
                }
            });
            if (data.username !== undefined)
            {
                const checkpass = Function.DecryptPass(password,data.salt);
                if (checkpass === data.password)
                {
                    let token = jsonwebtoken.sign({
                        id:data.id,
                        username:data.username
                    },process.env.SECRECT,{expiresIn:'1h'});
                    res.send({
                        status:200,
                        token_:token,
                        messenger:'Đăng nhập thành công'
                    });
                }
                else
                {
                    res.send({
                        status:404,
                        messenger:'Sai thông tin đăng nhập'
                    });
                }
            }
            else
            {
                res.send({
                    status:404,
                    messenger:'Tài khoản không tồn tại'
                });
            }
        }
        else{
            res.send({
                status:404,
                messenger:errors
            });
        }
    }
}