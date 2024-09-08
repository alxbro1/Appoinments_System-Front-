import axios from "axios";

export const sendAppoinment = async (data) => {
    try {
        const result = await axios.post(
          "https://appoinments-system-backend.vercel.app/turns/schedule",
          data
        );
        
        if (result && result.status == 201) {
          return
        }
    } catch {
        alert("The appoinment isn't succesfuly schedule");
  }
};
