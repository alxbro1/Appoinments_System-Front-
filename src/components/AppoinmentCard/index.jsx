import style from "./index.module.css";
import { cancellAppoinment } from "../../helpers/cancellAppoinment";

export const AppointmentCard = ({ data, onCancel }) => {
  const { date, time, status, id } = data;
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}/${year}`;


  const handleCancel = (event) => {
    cancellAppoinment(event)
      .then((res) => {
        console.log(res);
        onCancel();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={
        status === "active" ? style.container : style.containerCanceled
      }>
      {status === "active" ? (
        <p className={style.statusActive}>Appointment active</p>
      ) : (
        <p className={style.statusCancel}> Appointment canceled</p>
      )}
      <div
        className={style.infoContainer}>
        {status === "active" && (
          <button
            className={style.cancelButton}
            id={id}
            onClick={handleCancel}>
            Cancel
          </button>
        )}

        <div>
          <div
            className={style.infoContainer}
            style={{ justifyContent: "start" }}>
            <h3 className={style.timeInfo}>{time}</h3>
            <span className={style.timeSpan}>hs</span>
          </div>
          <h3 className={style.dateInfo}>{formattedDate}</h3>
        </div>
      </div>
    </div>
  );
};
