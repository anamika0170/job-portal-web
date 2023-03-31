import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
      <FormControl fullWidth>
        <InputLabel className="form-label" id="demo-simple-select-label">{labelText || name}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          label={labelText || name}
          className="form-select"
        >
          {list.map((itemValue, index) => {
            return (
              <MenuItem key={index} value={itemValue}>
                {itemValue}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
  );
};

export default FormRowSelect;
