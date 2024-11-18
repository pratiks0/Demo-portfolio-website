import styles from "./FooterStyles.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top without smooth behavior
  };
  return (
    <>
      <section id="footer" className={styles.container}>
        <p>
          &copy; 2024 Pratik Singh. <br />
          All rights reserved.
        </p>
      </section>
      <div className="text" id="icon-box" onClick={scrollToTop}>
        <button className="button">
          ↑
        </button>
      </div>
    </>
  );
}

export default Footer;
