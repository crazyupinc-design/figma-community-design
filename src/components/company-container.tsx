import { FunctionComponent } from "react";
import AppInstallFooter from "./app-install-footer";
import styles from "./company-container.module.css";
const CompanyContainer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <AppInstallFooter />
    </div>
  );
};

export default CompanyContainer;
