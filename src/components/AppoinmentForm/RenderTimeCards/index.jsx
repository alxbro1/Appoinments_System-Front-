import styles from "./index.module.css";
import HorarioCard from "./TimeCard";

const RenderTimeCards = ({ selectedTime, setSelectedTime }) => {
  const horarios = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleSelect = (horario) => {
    setSelectedTime(horario);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerCards}>
        {horarios.map((horario) => (
          <HorarioCard
            key={horario}
            horario={horario}
            isSelected={horario === selectedTime}
            onClick={() => handleSelect(horario)}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderTimeCards;
