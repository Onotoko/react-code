import axios from "axios";
import { API_BASE_URL } from 'configs/AppConfig'

const APIService = {}

APIService.stats = async () => {
    try { 
        const statsData = await axios({ 
            method: 'get', 
            url: `${API_BASE_URL}/stats`, 
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Accept": "application/json",
            }   
            
          }); 
 
        return statsData.toJson()
    } catch (error) { 
        return error 
    } 
}
APIService.getLastestUsers = async () => {
    try { 
        const userData = await axios({ 
            method: 'get', 
            url: `${API_BASE_URL}/players/new`, 
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Accept": "application/json",
            }   
            
          }); 
 
        return userData.toJson()
    } catch (error) { 
        return error 
    } 
}


export default APIService