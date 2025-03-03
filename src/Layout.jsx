/* eslint-disable react/prop-types */
import { Footer } from "./components/footer";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
