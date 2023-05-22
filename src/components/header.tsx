import { FunctionComponent, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

type HeaderType = {
  productIds?: string;

  /** Style props */
  rioColor?: Property.Color;
  furnitureColor?: Property.Color;
  interiorDesignColor?: Property.Color;
  propertyColor?: Property.Color;
  hambugerMenuColor?: Property.Color;
};

const Header: FunctionComponent<HeaderType> = ({
  productIds,
  rioColor,
  furnitureColor,
  interiorDesignColor,
  propertyColor,
  hambugerMenuColor,
}) => {
  const inteStyle: CSS.Properties = useMemo(() => {
    return {
      color: rioColor,
    };
  }, [rioColor]);

  const categoriesStyle: CSS.Properties = useMemo(() => {
    return {
      color: furnitureColor,
    };
  }, [furnitureColor]);

  const furnitureStyle: CSS.Properties = useMemo(() => {
    return {
      color: interiorDesignColor,
    };
  }, [interiorDesignColor]);

  const interiorDesignStyle: CSS.Properties = useMemo(() => {
    return {
      color: propertyColor,
    };
  }, [propertyColor]);

  const propertyStyle: CSS.Properties = useMemo(() => {
    return {
      color: hambugerMenuColor,
    };
  }, [hambugerMenuColor]);

  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.headerNavigation}>
      <div className={styles.logo} onClick={onLogoClick}>
        <span style={inteStyle}>Inte</span>
        <span className={styles.rio}>rio.</span>
      </div>
      <div className={styles.navigationMenu}>
        <a className={styles.navigationLink}>
          <div className={styles.categories} style={categoriesStyle}>
            Categories
          </div>
          <div className={styles.categories} style={furnitureStyle}>
            Furniture
          </div>
          <div className={styles.interiorDesign} style={interiorDesignStyle}>
            Interior Design
          </div>
          <div className={styles.categories} style={propertyStyle}>
            Property
          </div>
          <button className={styles.hambugerMenu}>
            <img className={styles.vectorIcon} alt="" src="/vector32.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector33.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector33.svg" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
