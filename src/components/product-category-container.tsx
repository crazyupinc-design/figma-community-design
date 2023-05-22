import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCabinet from "./container-cabinet";
import styles from "./product-category-container.module.css";
const ProductCategoryContainer: FunctionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onCard2Click = useCallback(() => {
    navigate("/cabinetpage");
  }, [navigate]);

  return (
    <div className={styles.productsCategory}>
      <article className={styles.shopPopular}>
        <div className={styles.categoryTitles}>
          <div className={styles.titleContainer}>
            <h2 className={styles.shopPopularCategories}>
              Shop Popular Categories
            </h2>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.seeAllButton}>
            <div className={styles.seeAll}>See All</div>
          </div>
        </div>
        <article className={styles.productsCards} data-animate-on-scroll>
          <article className={styles.card12}>
            <div className={styles.card1}>
              <div className={styles.chairCard}>
                <div className={styles.table}>Chair</div>
                <div className={styles.col}>
                  <img
                    className={styles.furnitureIcon}
                    alt=""
                    src="/furniture@2x.png"
                  />
                </div>
              </div>
            </div>
            <button className={styles.card2} onClick={onCard2Click}>
              <div className={styles.chairCard}>
                <div className={styles.table1}>Cabinet</div>
                <div className={styles.col}>
                  <img
                    className={styles.furnitureIcon1}
                    alt=""
                    src="/furniture1@2x.png"
                  />
                </div>
              </div>
            </button>
          </article>
          <article className={styles.card34}>
            <ContainerCabinet table="Table" />
            <button className={styles.card2}>
              <div className={styles.chairCard}>
                <div className={styles.table1}>Lamp</div>
                <div className={styles.col}>
                  <img
                    className={styles.furnitureIcon2}
                    alt=""
                    src="/furniture3@2x.png"
                  />
                </div>
              </div>
            </button>
          </article>
        </article>
      </article>
    </div>
  );
};

export default ProductCategoryContainer;
