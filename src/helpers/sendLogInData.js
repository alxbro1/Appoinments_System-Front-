import axios from "axios"

export const sendLogInData =async (data) => {
    try {
        const result = await axios.post(
          "https://appoinments-system-backend.vercel.app/users/login",
          data
        );
       
         if (result && result.status == 200) {
             return result.data.user
         }
    } catch{
        throw Error("user not found")
    }
} 