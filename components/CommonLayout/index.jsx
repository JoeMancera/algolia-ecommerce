import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import styles from "./CommonLayout.module.css";

export const CommonLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
