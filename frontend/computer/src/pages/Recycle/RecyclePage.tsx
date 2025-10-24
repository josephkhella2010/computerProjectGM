import { FaCheck } from "react-icons/fa6";
import styles from "./recycle.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import FormSection from "./childComponent/FormSection";
import MapSection from "./childComponent/MapSection";
import { useNavigate } from "react-router-dom";
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
  /*   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !formInfo.firstname ||
      !formInfo.lastname ||
      !formInfo.email ||
      !formInfo.phone ||
      !formInfo.street ||
      !formInfo.city ||
      !formInfo.zipcode ||
      !formInfo.amount ||
      !formInfo.message
    ) {
      toast.error("please fill all field");
      return;
    }
    try {
      const newFormInfo = {
        firstname: formInfo.firstname,
        lastname: formInfo.lastname,
        email: formInfo.email,
        phone: formInfo.phone,
        street: formInfo.street,
        city: formInfo.city,
        zipcode: formInfo.zipcode,
        amount: formInfo.amount,
        message: formInfo.message,
      };

      setFormInfo(newFormInfo);
      toast.success("message are sent");
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
    } catch (error) {
      console.log(error);
    }
  } */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    // Basic validation
    for (const key in formInfo) {
      if (!formInfo[key as keyof FormInfoType]) {
        e.preventDefault(); // Stop submission if a field is empty
        toast.error("Please fill all fields");
        return;
      }
    }

    // If validation passes, do NOT call e.preventDefault()
    // The form will submit naturally to Formsubmit.co

    toast.success("Message is being sent…");
  }

  console.log(formInfo);
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
          <FormSection
            handleSubmit={handleSubmit}
            FormArr={FormArr}
            setFormInfo={setFormInfo}
            formInfo={formInfo}
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
