import { FunctionComponent } from "react";
import styles from "./app-install-footer.module.css";

type AppInstallFooterType = {
  downloadBadgeAppstore?: string;
  downloadBadgeGoogleplay?: string;
};

const AppInstallFooter: FunctionComponent<AppInstallFooterType> = ({
  downloadBadgeAppstore,
  downloadBadgeGoogleplay,
}) => {
  return (
    <footer className={styles.footerLinks}>
      <div className={styles.containerOne}>
        <div className={styles.col1}>
          <div className={styles.company}>
            <div className={styles.company1}>Company</div>
            <div className={styles.listItems}>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.blog}>Blog</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.support}>
            <div className={styles.company1}>Support</div>
            <div className={styles.listItems}>
              <div className={styles.helpCenter}>Help Center</div>
              <div className={styles.safetyCenter}>Safety Center</div>
              <div className={styles.communityGuidelines}>
                Community Guidelines
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerOne}>
        <div className={styles.col2}>
          <div className={styles.support}>
            <div className={styles.company1}>Legal</div>
            <div className={styles.listItems}>
              <div className={styles.safetyCenter}>Cookies Policy</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfService}>Terms of Service</div>
              <div className={styles.termsOfService}>Law Enforcement</div>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.installApp}>
            <div className={styles.company1}>Install App</div>
            <div className={styles.badges}>
              <div className={styles.autoAddedFrame}>
                <button className={styles.downloadBadgeAppstore}>
                  <img className={styles.groupIcon} alt="" src="/group3.svg" />
                </button>
                <button className={styles.downloadBadgeAppstore}>
                  <img className={styles.groupIcon} alt="" src="/layer-2.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppInstallFooter;
