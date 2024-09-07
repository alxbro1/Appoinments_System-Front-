import axios from "axios";

export const addAppoinment = async (data) => {
  try {
    console.log(data)
    const res = await axios.post("http://localhost:3002/turns/schedule", data);
    if (res && res.status == 201) {
      return res.data.appoiment
    } else {
      throw Error("upps.. have a error");
    }
  } catch (err) {
    alert(err.message);
  }
};
