import { FunctionComponent, useCallback } from "react";
import ContainerCabinet from "./container-cabinet";
import styles from "./product-category-container.module.css";
const ProductCategoryContainer: FunctionComponent = () => {
  const onCol3Click = useCallback(() => {
    // Please sync "cabinet-page-original" to the project
  }, []);

  return (
    <div className={styles.productsCategory}>
      <article className={styles.shopPopular}>
        <div className={styles.categoryTitles}>
          <div className={styles.titleContainer}>
            <h2 className={styles.shopPopularCategories}>
              Shop Popular Categories
            </h2>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.seeAllButton}>
            <div className={styles.seeAll}>See All</div>
          </div>
        </div>
        <article className={styles.productsCards}>
          <article className={styles.col3Parent}>
            <div className={styles.col3}>
              <div className={styles.tableCard}>
                <div className={styles.table}>Chair</div>
                <div className={styles.furnitureWrapper}>
                  <img
                    className={styles.furnitureIcon}
                    alt=""
                    src="/furniture@2x.png"
                  />
                </div>
              </div>
            </div>
            <ContainerCabinet
              table="Cabinet"
              furniture="/furniture1@2x.png"
              onCol3Click={onCol3Click}
            />
          </article>
          <article className={styles.col3Group}>
            <ContainerCabinet
              table="Table"
              furniture="/furniture2@2x.png"
              propCursor="unset"
              propWidth="268px"
              propHeight="268px"
            />
            <ContainerCabinet
              table="Lamp"
              furniture="/furniture3@2x.png"
              propCursor="unset"
              propWidth="225px"
              propHeight="225px"
            />
          </article>
        </article>
      </article>
    </div>
  );
};

export default ProductCategoryContainer;
