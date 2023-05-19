import { FunctionComponent } from "react";
import styles from "./popup.module.css";

type PopupType = {
  onClose?: () => void;
};

const Popup: FunctionComponent<PopupType> = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <img className={styles.popupChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.thisIsFor}>This is for members only.</div>
      <div className={styles.joinMembershipWrapper}>
        <b className={styles.joinMembership}>Join Membership</b>
      </div>
    </div>
  );
};

export default Popup;
