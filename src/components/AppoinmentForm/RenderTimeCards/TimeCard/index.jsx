import styles from "./index.module.css";

const HorarioCard = ({ horario, isSelected, onClick }) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}>
      {horario + "hs"}
    </div>
  );
};

export default HorarioCard;
