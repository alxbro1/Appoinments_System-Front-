import axios from "axios";
import { AppointmentCard } from "../components/AppoinmentCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useScreenSize } from "../hooks/screenSize";
import { useDispatch } from "react-redux";
import { addAppointments } from "../redux/appoinmentReducer";


export const MisTurnos = () => {
  const dispatch = useDispatch()
  const {width} = useScreenSize()
  const userId = useSelector((state) => state.user.user.id);
  const appoinments = useSelector(state=>state.appoinments.appoinments)
  /* const [appointments, setAppointments] = useState([]); */

  // Función para obtener las citas del usuario
  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        `https://appoinments-system-backend.vercel.app/turns/getbyuser/${userId}`
      );
      dispatch(addAppointments(res.data))
     /*  setAppointments(res.data); */
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchAppointments(); // Llama a la función para obtener las citas al cargar el componente
    }
  }, [userId]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "2rem", color: "white" }}>
        Manage your appoinments here
      </h1>
      <ul
        style={
          width < 769
            ? {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                padding: "1rem 0",
                gap: "0.7rem",
              }
            : {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                padding: "1rem 0",
                gap: "1.2rem",
              }
        }>
        {appoinments.length > 0 ? (
          appoinments.map((appointment) => (
            <li key={appointment.id}>
              <AppointmentCard
                data={appointment}
                onCancel={fetchAppointments}
              />
            </li>
          ))
        ) : (
          <h3>Appoinments not found</h3>
        )}
      </ul>
    </div>
  );
};
