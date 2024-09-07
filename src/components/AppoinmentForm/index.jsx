import { validationAppoinmentSchedule } from "../../helpers/validates/validateAppoinmentSchedule";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import { sendAppoinment } from "../../helpers/sendAppoinment";
import style from "./index.module.css";
import RenderTimeCards from "./RenderTimeCards";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "./calendar.css";

export const AppoinmentForm = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneMonthFromNow = new Date(today);
  oneMonthFromNow.setDate(today.getDate() + 30);
   const disableSundays = ({ date }) => {
     return date.getDay() === 0;
   };

  const user = useSelector((state) => state.user.user);
  const appoinments = useSelector((state) => state.appoinments.appoinments);

  return (
    <div className={style.container}>
      <h1 className={style.tittle}>Get your Appointment here</h1>
      <div className={style.compContainer}>
        <h2 className={style.secondaryTittle}>Select the Date</h2>
        <Calendar
          className="customCalendar"
          minDate={today}
          maxDate={oneMonthFromNow} 
          tileDisabled={disableSundays} 
          onChange={setDate}
          value={date}
        />
      </div>

      <hr style={{ color: "white", width: "100%", borderRadius: "80%" }} />

      <div className={style.compContainer}>
        <h2 className={style.secondaryTittle}>Select the Time</h2>
        <RenderTimeCards
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </div>

      <Formik
        initialValues={{
          date: date.toISOString().split("T")[0],
          time: selectedTime || "",
          userId: user.id,
          appoinments,
        }}
        enableReinitialize={true}
        validate={validationAppoinmentSchedule}
        onSubmit={async (data)=>{sendAppoinment(data).then(() => {
          navigate("/perfile/appoinments");
        })}}>
        {({ values }) => (
          <Form className={style.form}>
            <Field
              type="hidden"
              name="date"
              value={values.date}
            />
            <Field
              type="hidden"
              name="time"
              value={selectedTime}
            />
            <Field
              type="hidden"
              name="userId"
              value={values.userId}
            />
            <ErrorMessage
              name="date"
              className={style.ErrorMessage}
              component="div"
            />
            <ErrorMessage
              name="time"
              component="div"
              className={style.ErrorMessage}
            />
            <ErrorMessage
              component="div"
              name="userId"
              className={style.ErrorMessage}
            />
            <button
              type="submit"
              className={style.submitButton}>
              Schedule appointment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
