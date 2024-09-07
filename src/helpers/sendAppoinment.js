import axios from "axios";

export const sendAppoinment = async (data) => {
    try {
        const result = await axios.post(
            "http://localhost:3002/turns/schedule",
            data
        );
        
        if (result && result.status == 201) {
            alert("Appoinment schedule succesfuly");
        }
    } catch {
        alert("The appoinment isn't succesfuly schedule");
  }
};
