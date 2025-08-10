import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./index";

const FormSelect = ({ label, name, list, defaultValue }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="capitalize text-sm font-medium">
        {label}
      </Label>
      <Select defaultValue={defaultValue} name={name}>
        <SelectTrigger
          id={name}
          className="h-8 w-full border border-gray-300/30 rounded-md shadow-sm focus:ring-2 focus:ring-primary"
        >
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {list.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
