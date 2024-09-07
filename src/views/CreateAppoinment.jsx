import { AppoinmentForm } from "../components/AppoinmentForm/index";
import { RightComponent } from "../components/AppoinmentFormComplement";
import { useScreenSize } from "../hooks/screenSize";

export const CreateAppoinment = () => {
  const { width } = useScreenSize();

  return (
    <div style={{ display: "flex" }}>
      <AppoinmentForm />
      {width > 768 && <RightComponent />}
    </div>
  );
};
