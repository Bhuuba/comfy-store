import { Label, Checkbox } from "./ui";

const FormCheckbox = ({ label, name, defaultValue }) => {
  return (
    <div className="flex items-center space-x-3 rounded-md border border-border  p-3 shadow-sm">
      <Checkbox id={name} name={name} defaultChecked={defaultValue} />
      <Label htmlFor={name} className="capitalize cursor-pointer">
        {label}
      </Label>
    </div>
  );
};

export default FormCheckbox;
