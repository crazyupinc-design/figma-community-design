import { FunctionComponent } from "react";
import Header from "../components/header";
import CabinetsContainer from "../components/cabinets-container";
import ContainerRow from "../components/container-row";
import CompanyContainer from "../components/company-container";
import styles from "./cabinet-page.module.css";
const CabinetPage: FunctionComponent = () => {
  return (
    <div className={styles.cabinetPage}>
      <Header
        productIds="/hambugermenu.svg"
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
        <ContainerRow />
      </div>
      <CompanyContainer />
    </div>
  );
};

export default CabinetPage;
