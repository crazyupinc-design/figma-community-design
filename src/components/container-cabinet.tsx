import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./container-cabinet.module.css";

type ContainerCabinetType = {
  table?: string;
  furniture?: string;

  /** Style props */
  propCursor?: Property.Cursor;
  propWidth?: Property.Width;
  propHeight?: Property.Height;

  /** Action props */
  onCol3Click?: () => void;
};

const ContainerCabinet: FunctionComponent<ContainerCabinetType> = ({
  table,
  furniture,
  propCursor,
  propWidth,
  propHeight,
  onCol3Click,
}) => {
  const tableStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const furnitureIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <button className={styles.col3} onClick={onCol3Click}>
      <div className={styles.tableCard}>
        <div className={styles.table} style={tableStyle}>
          {table}
        </div>
        <div className={styles.furnitureWrapper}>
          <img
            className={styles.furnitureIcon}
            alt=""
            src={furniture}
            style={furnitureIconStyle}
          />
        </div>
      </div>
    </button>
  );
};

export default ContainerCabinet;
