import { FaCheck } from "react-icons/fa6";
import styles from "./recycle.module.css";
const Arr = ["Recycling", "Data Destruction", "Loading"];
interface FieldType {
  label: string;
  value: string;
  placeholder: string;
}

interface FormSection {
  title: string;
  fields: FieldType[];
}

const FormArr: FormSection[] = [
  {
    title: "Your Information:",
    fields: [
      { label: "First Name", value: "", placeholder: "FirstName" },
      { label: "LastName", value: "", placeholder: "LastName" },
      { label: "Email", value: "", placeholder: "Email" },
      { label: "Phone", value: "", placeholder: "Phone" },
    ],
  },
  {
    title: "Pickup Location:",
    fields: [
      { label: "Street Address", value: "", placeholder: "Street Address" },
      { label: "City/Town", value: "", placeholder: "City/Town" },
      { label: "Zip Code", value: "", placeholder: "Zip Code" },
      {
        label: "Amount of Material Needing to be Picked Up",
        value: "",
        placeholder: "Amount of Material Needing to be Picked Up",
      },
      {
        label: "Message",
        value: "",
        placeholder: "Do you have any inquiry? (optional)",
      },
    ],
  },
];
export default function RecyclePage() {
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
          <div className={styles.recycleMiddleContainerLeftSection}>
            <h5>See If You Qualify For Free Pickup</h5>
            <p>
              Basic recycling is FREE for residents of Lincoln. Not all pickups
              are free based on volume.
            </p>
            <form action="">
              {FormArr &&
                FormArr.map((item, index) => {
                  return (
                    <div key={index}>
                      <h5>{item.title}</h5>
                      {item.fields &&
                        item.fields.map((item, ind) => {
                          return (
                            <div key={ind}>
                              <label htmlFor="">
                                {item.label} <span>*</span>
                              </label>

                              {item.label === "Message" ? (
                                <textarea
                                  name=""
                                  id=""
                                  placeholder={item.placeholder}
                                ></textarea>
                              ) : (
                                <input
                                  type="text"
                                  placeholder={item.placeholder}
                                />
                              )}
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              <button>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
