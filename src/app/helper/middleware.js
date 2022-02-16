import accountModels from "../models/accountModels.js";
import {Op} from "sequelize";
import jsonwebtoken from "jsonwebtoken";
export const middleware = {
   async verifyToken(req,res,next){
        let header = req.headers;
        if (header !== undefined && header !== null)
        {
            let token = header.authorization;
            if (token)
            {
                try {
                    let verify_token = jsonwebtoken.verify(token,process.env.SECRECT);
                    console.log(timeConverter(verify_token.iat));
                    console.log(timeConverter(verify_token.exp));
                    let users = await accountModels.findOne({
                        where:{
                           id:verify_token.id
                        }
                    });
                    if (users)
                    {
                        next();    
                    }
                    else
                    {
                        res.send({
                            status:404,
                            messenger:'Thông tin truy cập chưa hợp lệ'
                        });
                    }
                } catch (error) {
                    res.send({
                        status:404,
                        messenger:'Thông tin truy cập chưa hợp lệ'
                    });
                }
            }
            else
            {
                res.send({
                    status:404,
                    messenger:'Không có quyền truy cập hệ thống'
                });
            }
        }
    }
}
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }