import axios from "axios"

export const sendLogInData =async (data) => {
    try {
        const result = await axios.post('http://localhost:3002/users/login',data)
       
         if (result && result.status == 200) {
             return result.data.user
         }
    } catch{
        throw Error("user not found")
    }
} 