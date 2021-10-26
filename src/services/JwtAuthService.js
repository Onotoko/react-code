import axios from "axios";
import { API_BASE_URL } from 'configs/AppConfig'

const JwtAuthService = {}

JwtAuthService.login = async (data) => {
    try { 
        const loginReq = await axios({ 
            method: 'post', 
            url: `${API_BASE_URL}/admin/login`, 
            data: data 
          }); 
 
        if(loginReq && loginReq.data){ 
            return loginReq.data 
        }else{ 
            return null 
        } 
    } catch (error) { 
        return error 
    } 
}


export default JwtAuthService