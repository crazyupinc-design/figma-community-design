import { FunctionComponent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import Header from "../components/header";
import CabinetsContainer from "../components/cabinets-container";
import CompanyContainer from "../components/company-container";
import styles from "./cabinet-page.module.css";
const CabinetPage: FunctionComponent = () => {
  return (
    <div className={styles.cabinetPage}>
      <Header
        rioColor="#312d2d"
        furnitureColor="#312d2d"
        interiorDesignColor="#312d2d"
        propertyColor="#312d2d"
        hambugerMenuColor="#312d2d"
      />
      <section className={styles.bannerSection}>
        <div className={styles.banner}>
          <div className={styles.cabinetInStylishDisguise}>
            Cabinet in stylish disguise
          </div>
        </div>
      </section>
      <div className={styles.products}>
        <CabinetsContainer />
        <div className={styles.cabinets1Row}>
          <button className={styles.productsListTitle}>
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
          </button>
          <div className={styles.container}>
            <div className={styles.col1}>
              <button className={styles.cabinetCard1}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.cabinetDetail}>
                  <div className={styles.name}>BRIMNES</div>
                  <div className={styles.size}>
                    Cabinet with doors, white, 78x95 cm
                  </div>
                  <div className={styles.price}>Rp 1.299.000</div>
                </div>
              </button>
              <button className={styles.cabinetCard1}>
                <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
                <div className={styles.cabinetDetail}>
                  <div className={styles.name1}>BRIMNES</div>
                  <div className={styles.size}>
                    Cabinet with doors, white, 78x95 cm
                  </div>
                  <div className={styles.price}>Rp 1.299.000</div>
                </div>
              </button>
            </div>
            <div className={styles.col1}>
              <button className={styles.cabinetCard1}>
                <img
                  className={styles.imageIcon2}
                  alt=""
                  src="/image2@2x.png"
                />
                <div className={styles.cabinetDetail}>
                  <div className={styles.name1}>BRIMNES</div>
                  <div className={styles.size}>
                    Cabinet with doors, white, 78x95 cm
                  </div>
                  <div className={styles.price}>Rp 1.299.000</div>
                </div>
              </button>
              <button className={styles.cabinetCard4}>
                <img
                  className={styles.imageIcon2}
                  alt=""
                  src="/image3@2x.png"
                />
                <div className={styles.cabinetDetail}>
                  <div className={styles.name1}>BRIMNES</div>
                  <div className={styles.size}>
                    Cabinet with doors, white, 78x95 cm
                  </div>
                  <div className={styles.price}>Rp 1.299.000</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <CompanyContainer />
    </div>
  );
};

export default CabinetPage;
