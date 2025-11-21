import { FaCheck } from "react-icons/fa6";
import styles from "./recycle.module.css";
import MapSection from "./childComponent/MapSection";
import { useNavigate } from "react-router-dom";
import CommonFormSection from "../../common Component/CommonFormSection";

const Arr = ["Recycling", "Data Destruction", "Loading"];
interface FieldType {
  label: string;
  val: string;
  placeholder: string;
  name: string;
}

export interface FormSectionType {
  title: string;
  fields: FieldType[];
}

export default function RecyclePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.recycleMainWarpper}>
      <div className={styles.recycleWarpper}>
        <div className={styles.recycleUpperContainer}>
          <h3>Pickup & Drop-Off</h3>
          <div className={styles.recycleUpperContainerMainSection}>
            {Arr &&
              Arr.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className={styles.recycleUpperContainerContent}
                  >
                    <FaCheck />
                    <p>{item}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.recycleMiddleContainer}>
          {" "}
          <CommonFormSection />
          <MapSection />
        </div>
        <div className={styles.recycleLowerContainer}>
          <p>Ready to Recycle Your Electronics? Contact Us</p>
          <button onClick={() => navigate("/contactUs")}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
