import style from "./index.module.css";

export const RightComponent = () => {
  return (
    <div className={style.container}>
      <h2>Take care of your mind because it is the only one you have</h2>
      <img
        src="/regandoCerebro.svg"
        alt=""
      />
      <h2 style={{opacity:"50%"}}>You're not taking a turn, you're taking another chance</h2>
    </div>
  );
};
