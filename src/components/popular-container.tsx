import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./popular-container.module.css";

type PopularContainerType = {
  /** Style props */
  propAlignSelf?: Property.AlignSelf;
  propWidth?: Property.Width;
  propJustifyContent?: Property.JustifyContent;
  propJustifyContent1?: Property.JustifyContent;
  propJustifyContent2?: Property.JustifyContent;
  propJustifyContent3?: Property.JustifyContent;
};

const PopularContainer: FunctionComponent<PopularContainerType> = ({
  propAlignSelf,
  propWidth,
  propJustifyContent,
  propJustifyContent1,
  propJustifyContent2,
  propJustifyContent3,
}) => {
  const containerStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const cabinetCard1Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const cabinetCard2Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent1,
    };
  }, [propJustifyContent1]);

  const cabinetCard3Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent2,
    };
  }, [propJustifyContent2]);

  const cabinetCard4Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent3,
    };
  }, [propJustifyContent3]);

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.col1}>
        <button className={styles.cabinetCard1} style={cabinetCard1Style}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.cabinetDetail}>
            <div className={styles.name}>BRIMNES</div>
            <div className={styles.size}>
              Cabinet with doors, white, 78x95 cm
            </div>
            <div className={styles.price}>Rp 1.299.000</div>
          </div>
        </button>
        <button className={styles.cabinetCard1} style={cabinetCard2Style}>
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
        <button className={styles.cabinetCard1} style={cabinetCard3Style}>
          <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
          <div className={styles.cabinetDetail}>
            <div className={styles.name1}>BRIMNES</div>
            <div className={styles.size}>
              Cabinet with doors, white, 78x95 cm
            </div>
            <div className={styles.price}>Rp 1.299.000</div>
          </div>
        </button>
        <button className={styles.cabinetCard4} style={cabinetCard4Style}>
          <img className={styles.imageIcon2} alt="" src="/image3@2x.png" />
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
  );
};

export default PopularContainer;
