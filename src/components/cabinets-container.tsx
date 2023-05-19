import { FunctionComponent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import PopularContainer from "./popular-container";
import styles from "./cabinets-container.module.css";
const CabinetsContainer: FunctionComponent = () => {
  return (
    <div className={styles.cabinets1Row}>
      <div className={styles.productsListTitle}>
        <FormControl
          className={styles.featuredParent}
          sx={{ width: 193 }}
          variant="standard"
        >
          <InputLabel color="primary">Featured</InputLabel>
          <Select color="primary" size="small" label="Featured">
            <MenuItem value="Featured">Featured</MenuItem>
            <MenuItem value="High Price">High Price</MenuItem>
            <MenuItem value="Low Price">Low Price</MenuItem>
            <MenuItem value="Top Rated">Top Rated</MenuItem>
            <MenuItem value="New Arrival">New Arrival</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <PopularContainer />
    </div>
  );
};

export default CabinetsContainer;
