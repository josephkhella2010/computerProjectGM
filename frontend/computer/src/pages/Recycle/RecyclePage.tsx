/* import { FaCheck } from "react-icons/fa6";
import styles from "./recycle.module.css";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import FormSection from "./childComponent/FormSection";
import MapSection from "./childComponent/MapSection";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

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

const FormArr: FormSectionType[] = [
  {
    title: "Your Information:",
    fields: [
      {
        label: "First Name",
        val: "firstname",
        placeholder: "FirstName",
        name: "firstname",
      },
      {
        label: "LastName",
        val: "lastname",
        placeholder: "LastName",
        name: "lastname",
      },
      { label: "Email", val: "email", placeholder: "Email", name: "email" },
      { label: "Phone", val: "phone", placeholder: "Phone", name: "phone" },
    ],
  },
  {
    title: "Pickup Location:",
    fields: [
      {
        label: "Street Address",
        val: "street",
        placeholder: "Street Address",
        name: "street",
      },
      {
        label: "City/Town",
        val: "city",
        placeholder: "City/Town",
        name: "city",
      },
      {
        label: "Zip Code",
        val: "zipcode",
        placeholder: "Zip Code",
        name: "zipcode",
      },
      {
        label: "Amount of Material Needing to be Picked Up",
        val: "amount",
        placeholder: "Amount of Material Needing to be Picked Up",
        name: "amount",
      },
      {
        label: "Message",
        val: "message",
        placeholder: "Do you have any inquiry? (optional)",
        name: "message",
      },
    ],
  },
];
export interface FormInfoType {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipcode: string;
  amount: string;
  message: string;
}
export default function RecyclePage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState<FormInfoType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zipcode: "",
    amount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    for (const key in formInfo) {
      if (!formInfo[key as keyof FormInfoType]) {
        e.preventDefault();
        toast.error("Please fill all fields");
        return;
      }
    }

    emailjs
      .sendForm(
        "service_3qi7la4",
        "template_z0xzb3o",
        formRef.current,
        "_QwwURVhVg_YIEJ5A"
      )
      .then(
        () => {
          setFormInfo({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            zipcode: "",
            amount: "",
            message: "",
          });
          toast.success("Message is being sent…");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  //console.log(formInfo);

  return (
    <div className={styles.recycleMainWarpper}>
      <ToastContainer />

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
          <FormSection
            handleSubmit={handleSubmit}
            FormArr={FormArr}
            setFormInfo={setFormInfo}
            formInfo={formInfo}
            formRef={formRef}
          />
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
 */

import { FaCheck } from "react-icons/fa6";
import styles from "./recycle.module.css";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer />

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
