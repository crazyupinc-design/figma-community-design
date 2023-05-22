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

  return (
    <button className={styles.card3} onClick={onCol3Click}>
      <div className={styles.tableCard}>
        <div className={styles.table} style={tableStyle}>
          {table}
        </div>
        <div className={styles.col}>
          <img
            className={styles.furnitureIcon}
            alt=""
            src="/furniture2@2x.png"
          />
        </div>
      </div>
    </button>
  );
};

export default ContainerCabinet;
