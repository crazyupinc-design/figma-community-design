import { FunctionComponent, useEffect } from "react";
import Header from "./header";
import styles from "./discover-container.module.css";
const DiscoverContainer: FunctionComponent = () => {
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

  return (
    <article className={styles.header} data-animate-on-scroll>
      <Header
        rioColor="#fff"
        furnitureColor="#fff"
        interiorDesignColor="#fff"
        propertyColor="#fff"
        hambugerMenuColor="#fff"
      />
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>
          <h1 className={styles.discoverTheBest}>
            <span className={styles.discoverTheBestTxt}>
              <p className={styles.furnitureForYou}>{`Discover The Best `}</p>
              <p className={styles.furnitureForYou}>Furniture for You!</p>
            </span>
          </h1>
          <img
            className={styles.titleSectionIcon}
            alt=""
            src="/titlesection.svg"
          />
        </div>
        <button className={styles.bannerButton}>
          <div className={styles.explore}>Explore All Products</div>
        </button>
      </div>
      <div className={styles.bannerImages}>
        <div className={styles.pot}>
          <div className={styles.pricePopup}>
            <img
              className={styles.pricePopupChild}
              alt=""
              src="/rectangle-11.svg"
            />
            <div className={styles.noisoSofa}>Noiso Sofa</div>
            <div className={styles.rp4499000}>Rp. 4.499.000</div>
            <div className={styles.woodenTableWith}>
              Wooden Table with Premium Quality
            </div>
            <div className={styles.viewProductWrapper}>
              <div className={styles.viewProduct}>View Product</div>
            </div>
          </div>
          <img className={styles.dotIcon} alt="" src="/dot.svg" />
        </div>
        <div className={styles.table}>
          <div className={styles.pricePopup}>
            <img
              className={styles.pricePopupChild}
              alt=""
              src="/rectangle-12.svg"
            />
            <div className={styles.noisoSofa}>Noiso Sofa</div>
            <div className={styles.rp4499000}>Rp. 4.499.000</div>
            <div className={styles.woodenTableWith}>
              Wooden Table with Premium Quality
            </div>
            <div className={styles.viewProductWrapper}>
              <div className={styles.viewProduct}>View Product</div>
            </div>
          </div>
          <img className={styles.dotIcon} alt="" src="/dot1.svg" />
        </div>
        <div className={styles.cabinet}>
          <a className={styles.pricePopup2}>
            <img
              className={styles.pricePopupChild}
              alt=""
              src="/rectangle-13.svg"
            />
            <div className={styles.noisoSofa}>Noiso Sofa</div>
            <div className={styles.rp4499000}>Rp. 4.499.000</div>
            <div className={styles.woodenTableWith}>
              Wooden Table with Premium Quality
            </div>
            <div className={styles.viewProductWrapper}>
              <div className={styles.viewProduct}>View Product</div>
            </div>
          </a>
          <img className={styles.dotIcon} alt="" src="/dot2.svg" />
        </div>
        <div className={styles.sofa}>
          <div className={styles.pricePopup}>
            <img
              className={styles.pricePopupChild}
              alt=""
              src="/rectangle-14.svg"
            />
            <div className={styles.noisoSofa}>Noiso Sofa</div>
            <div className={styles.rp4499000}>Rp. 4.499.000</div>
            <div className={styles.woodenTableWith}>
              Wooden Table with Premium Quality
            </div>
            <div className={styles.viewProductWrapper}>
              <div className={styles.viewProduct}>View Product</div>
            </div>
          </div>
          <img className={styles.dotIcon} alt="" src="/dot3.svg" />
        </div>
      </div>
    </article>
  );
};

export default DiscoverContainer;
