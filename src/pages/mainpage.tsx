import { FunctionComponent, useState, useCallback, useEffect } from "react";
import Popup from "../components/popup";
import PortalPopup from "../components/portal-popup";
import DiscoverContainer from "../components/discover-container";
import ProductCategoryContainer from "../components/product-category-container";
import CompanyFooter from "../components/company-footer";
import styles from "./mainpage.module.css";
const Mainpage: FunctionComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

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
    <>
      <div className={styles.mainpage}>
        <DiscoverContainer />
        <ProductCategoryContainer />
        <article className={styles.bedCategoryBanner}>
          <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          <div className={styles.bannerRightSection}>
            <div className={styles.bannerTitle}>
              <p className={styles.simpleBedFor}>Simple Bed for Your</p>
              <p className={styles.weekend}>Weekend</p>
            </div>
            <div className={styles.bannerContent}>
              <p className={styles.enjoyYourWeekends}>
                Enjoy your weekends with your
              </p>
              <p
                className={styles.enjoyYourWeekends}
              >{`families using our lastest Simple `}</p>
              <p className={styles.weekend}>Bed set!</p>
            </div>
            <button className={styles.bedCategoryLandingButton}>
              <div className={styles.exploreAllProducts}>
                Explore All Products
              </div>
            </button>
          </div>
        </article>
        <div className={styles.bottomBanner}>
          <div className={styles.background} />
          <div className={styles.contentSection} data-animate-on-scroll>
            <div className={styles.titleButton}>
              <div className={styles.getDiscountUp}>
                <p className={styles.enjoyYourWeekends}>{`Get Discount up `}</p>
                <p className={styles.weekend}>to 50% off Today!</p>
              </div>
              <button
                className={styles.discountCategoryLandingButt}
                onClick={openPopup}
              >
                <div className={styles.exploreAllProducts}>
                  Explore All Products
                </div>
              </button>
            </div>
          </div>
        </div>
        <CompanyFooter />
      </div>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(70, 70, 70, 0.76)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Popup onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Mainpage;
