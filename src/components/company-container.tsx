import { FunctionComponent } from "react";
import AppInstallFooter from "./app-install-footer";
import styles from "./company-container.module.css";
const CompanyContainer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <AppInstallFooter
        downloadBadgeAppstore="/downloadbadge-appstore.svg"
        downloadBadgeGoogleplay="/downloadbadge-googleplay.svg"
      />
    </div>
  );
};

export default CompanyContainer;
