import { Input } from "./ui";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <Input
        className={`${size}`}
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default FormInput;
