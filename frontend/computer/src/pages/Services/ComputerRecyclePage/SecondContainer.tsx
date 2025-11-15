import { useLocation } from "react-router-dom";
import styles from "./ComputerRecyclePage.module.css";

export default function SecondContainer() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={styles.ComputerRecyclePageSecondContainerMainContainer}>
      {path === "/destruction-data-service-page" ? "" : <h3>END-TO-END</h3>}
      <h1>
        {path === "/destruction-data-service-page"
          ? "Priced Per Item"
          : "Free Pickup For Bulk Orders"}
      </h1>
      {path === "/destruction-data-service-page"
        ? "Tell us what kind of equipment or data you need destroyed to get full pricing. "
        : " Send us your equipment details to see if you qualify for a free pickup.Most bulk pickups do."}
    </div>
  );
}
