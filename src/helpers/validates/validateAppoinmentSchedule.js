export const validationAppoinmentSchedule = (data) => {
  const inputDate = new Date(data.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneMonth = new Date(today);
  oneMonth.setDate(today.getDate() + 30);

  const timePattern = /^(09|1[0-2]|1[5-9]|20):00$/;

  const errorObject = {};

  data.appoinments.forEach(appoinment => {
    const date = new Date(appoinment.date)
    console.log(appoinment.date);
    console.log(data.date)
    if (appoinment.date == data.date) {
      errorObject.date = "You already have an appointment for this day";
    }
  });

  if (!inputDate || inputDate < today || inputDate > oneMonth) {
    errorObject.date =
      "The maximum deadline to get an appointment is one month, and it must be at least one day in advance.";
  }

  if (!data.time || !timePattern.test(data.time)) {
    errorObject.time = "There are no shifts for that time.";
  }



  return errorObject;
};
