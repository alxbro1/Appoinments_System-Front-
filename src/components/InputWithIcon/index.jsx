import { useState } from "react";
import { ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./index.module.css";

const GradientIcon = ({ icon: IconComponent, gradientId }) => (
  <IconComponent style={{ fill: `url(#${gradientId})` }} />
);

export const InputWithIcon = ({
  field,
  form,
  type,
  placeholder,
  icon,
  gradientColor1,
  gradientColor2,
  color,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputWrapper}>
      <svg
        width="0"
        height="0">
        <defs>
          <linearGradient
            id="gradient1"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: gradientColor1, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: gradientColor2, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>

      <div
        // eslint-disable-next-line no-unused-vars, no-constant-condition
        className={ color ? styles.inputWithIconV : styles.inputWithIconG}>
        <span className={`${styles.icon}`}>
          <GradientIcon
            icon={icon}
            gradientId="gradient1"
          />
        </span>
        <input
          {...field}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          style={{}}
          className={`${
            form.errors[field.name] && form.touched[field.name]
              ? styles.inputError
              : ""
          }`}
          {...props}
        />
        {type === "password" && (
          <span
            className={styles.eyeIcon}
            onClick={togglePasswordVisibility}>
            <GradientIcon
              icon={showPassword ? FaEyeSlash : FaEye}
              gradientId="gradient1"
            />
          </span>
        )}
      </div>
      <ErrorMessage
        name={field.name}
        component="div"
        className={styles.error}
      />
    </div>
  );
};
