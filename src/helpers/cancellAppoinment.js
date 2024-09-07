import axios from 'axios'

export const cancellAppoinment = async (event) => {
    await axios.put(`http://localhost:3002/turns/cancel/${event.target.id}`)

    return event.target.id;
}