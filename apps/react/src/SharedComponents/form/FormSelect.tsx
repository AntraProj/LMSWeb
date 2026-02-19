import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean; // ✅ add this
};

export default function FormSelect({
  label,
  name,
  value,
  options,
  onChange,
  disabled = false, // ✅ default
}: Props) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}