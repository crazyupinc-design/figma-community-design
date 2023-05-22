import { FunctionComponent } from "react";
import AppInstallFooter from "./app-install-footer";
import styles from "./company-footer.module.css";
const CompanyFooter: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <AppInstallFooter />
    </footer>
  );
};

export default CompanyFooter;
