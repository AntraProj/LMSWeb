import { TextField, TextFieldProps } from "@mui/material";

export default function FormInput(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      //InputLabelProps={{ shrink: true }}
      sx={{
        "& .MuiInputBase-input": {
          fontSize: "14px",
        },
      }}
      {...props}
    />
  );
}