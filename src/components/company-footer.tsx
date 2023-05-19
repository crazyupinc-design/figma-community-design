import { FunctionComponent } from "react";
import AppInstallFooter from "./app-install-footer";
import styles from "./company-footer.module.css";
const CompanyFooter: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <AppInstallFooter
        downloadBadgeAppstore="/downloadbadge-appstore1.svg"
        downloadBadgeGoogleplay="/downloadbadge-googleplay1.svg"
      />
    </footer>
  );
};

export default CompanyFooter;
