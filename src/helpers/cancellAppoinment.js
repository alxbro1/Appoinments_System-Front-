import axios from 'axios'

export const cancellAppoinment = async (event) => {
    await axios.put(
      `https://appoinments-system-backend.vercel.app/turns/cancel/${event.target.id}`
    );

    return event.target.id;
}