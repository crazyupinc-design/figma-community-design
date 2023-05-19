import { FunctionComponent } from "react";
import PopularContainer from "./popular-container";
import styles from "./container-row.module.css";
const ContainerRow: FunctionComponent = () => {
  return (
    <div className={styles.cabinets2Row}>
      <PopularContainer
        propAlignSelf="unset"
        propWidth="1170px"
        propJustifyContent="flex-start"
        propJustifyContent1="flex-start"
        propJustifyContent2="flex-start"
        propJustifyContent3="flex-start"
      />
    </div>
  );
};

export default ContainerRow;
