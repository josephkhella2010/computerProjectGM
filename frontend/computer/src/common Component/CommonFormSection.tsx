import { useLocation } from "react-router-dom";
import styles from "./CommonFormSection.module.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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
export default function CommonFormSection() {
  const location = useLocation();
  console.log(location.pathname);
  const formRef = useRef<HTMLFormElement | null>(null);
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
  function getHeader() {
    let name = "";
    switch (location.pathname) {
      case "/recycle":
        name = "See If You Qualify For Free Pickup";
        break;
      case "/data-destruction":
        name = "See If You Qualify For Free Data Destruction";
        break;
      default:
        name = "";
        break;
    }
    return name;
  }

  return (
    <div className={styles.recycleMiddleContainer}>
      <div className={styles.recycleMiddleContainerLeftSection}>
        {getHeader() && <h5>{getHeader()}</h5>}
        {location.pathname === "/recycle" && (
          <p className={styles.recycleMiddleContainerLeftSectionFirstPara}>
            Basic recycling is FREE for residents of Lincoln. Not all pickups
            are free based on volume.
          </p>
        )}
        <form
          ref={formRef}
          className={styles.formContainer}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/josephkhella2022@gmail.com"
          method="POST"
        >
          {FormArr &&
            FormArr.map((item, index) => {
              return (
                <div key={index} className={styles.formSection}>
                  <h6>{item.title}</h6>
                  <div className={styles.inputLabelMainContainer}>
                    {item.fields &&
                      item.fields.map((item, ind) => {
                        return (
                          <div key={ind} className={styles.inputLabelContainer}>
                            <label htmlFor={item.placeholder}>
                              {item.label} <span>*</span>
                            </label>

                            {item.label === "Message" ? (
                              <textarea
                                name={item.name}
                                id={item.placeholder}
                                placeholder={item.placeholder}
                                className={styles.textAreaInput}
                                value={formInfo[item.val as keyof FormInfoType]}
                                onChange={(e) =>
                                  setFormInfo({
                                    ...formInfo,
                                    [item.name]: e.target.value,
                                  })
                                }
                              ></textarea>
                            ) : (
                              <input
                                type={item.name === "email" ? "email" : "text"}
                                name={item.name}
                                placeholder={item.placeholder}
                                id={item.placeholder}
                                className={styles.textInput}
                                value={formInfo[item.val as keyof FormInfoType]}
                                onChange={(e) =>
                                  setFormInfo({
                                    ...formInfo,
                                    [item.name]: e.target.value,
                                  })
                                }
                              />
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}
