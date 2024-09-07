import axios from "axios";

export const sendRegisterData = async (data) => {
  try {
    const res = await axios.post(
      "https://appoinments-system-backend.vercel.app/users/register",
      data
    );
    if (res && res.status == 201){
        alert("the user as register succesfuly")
    }
    else{
        alert("upps.. have a error")
    }
  } catch (err) {
    alert(err.data.message)
}
};
