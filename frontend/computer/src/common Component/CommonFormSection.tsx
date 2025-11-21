/* 
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
  inputType: string;
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
        inputType: "text",
      },
      {
        label: "LastName",
        val: "lastname",
        placeholder: "LastName",
        name: "lastname",
        inputType: "text",
      },
      {
        label: "Email",
        val: "email",
        placeholder: "Email",
        name: "email",
        inputType: "text",
      },
      {
        label: "Phone",
        val: "phone",
        placeholder: "Phone",
        name: "phone",
        inputType: "text",
      },
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
        inputType: "text",
      },
      {
        label: "City/Town",
        val: "city",
        placeholder: "City/Town",
        name: "city",
        inputType: "text",
      },
      {
        label: "Zip Code",
        val: "zipcode",
        placeholder: "Zip Code",
        name: "zipcode",
        inputType: "text",
      },
      {
        label: "Type",
        val: "",
        placeholder: "Type",
        name: "type",
        inputType: "select",
      },
      {
        label: "Amount of Material Needing to be Picked Up",
        val: "amount",
        placeholder: "Amount of Material Needing to be Picked Up",
        name: "amount",
        inputType: "text",
      },

      {
        label: "Message",
        val: "message",
        placeholder: "Do you have any inquiry? (optional)",
        name: "message",
        inputType: "textArea",
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
  type: string;
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
    type: "",
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
            type: "",
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
          {FormArr.map((section, index) => (
            <div key={index} className={styles.formSection}>
              <h6>{section.title}</h6>
              <div className={styles.inputLabelMainContainer}>
                {section.fields.map((field, ind) => (
                  <div key={ind} className={styles.inputLabelContainer}>
                    <label htmlFor={field.placeholder}>
                      {field.label} <span>*</span>
                    </label>

                    {field.inputType === "select" ? (
                      <select
                        name={field.name}
                        id={field.placeholder}
                        className={styles.textInput}
                        value={formInfo[field.name as keyof FormInfoType]}
                        onChange={(e) =>
                          setFormInfo({
                            ...formInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      >
                        <option value="" disabled>
                          Select type of the request
                        </option>
                        <option value="pick-up">PickUp</option>
                        <option value="data-destruction">
                          Data Destruction
                        </option>
                      </select>
                    ) : field.inputType === "textArea" ? (
                      <textarea
                        name={field.name}
                        id={field.placeholder}
                        placeholder={field.placeholder}
                        className={styles.textAreaInput}
                        value={formInfo[field.name as keyof FormInfoType]}
                        onChange={(e) =>
                          setFormInfo({
                            ...formInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      ></textarea>
                    ) : (
                      <input
                        type={field.name === "email" ? "email" : "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        id={field.placeholder}
                        className={styles.textInput}
                        value={formInfo[field.name as keyof FormInfoType]}
                        onChange={(e) =>
                          setFormInfo({
                            ...formInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}
 */

import { useLocation } from "react-router-dom";
import styles from "./CommonFormSection.module.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import axios from "axios";

interface FieldType {
  label: string;
  val: string;
  placeholder: string;
  name: string;
  inputType: string;
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
        inputType: "text",
      },
      {
        label: "LastName",
        val: "lastname",
        placeholder: "LastName",
        name: "lastname",
        inputType: "text",
      },
      {
        label: "Email",
        val: "email",
        placeholder: "Email",
        name: "email",
        inputType: "text",
      },
      {
        label: "Phone",
        val: "phone",
        placeholder: "Phone",
        name: "phone",
        inputType: "text",
      },
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
        inputType: "text",
      },
      {
        label: "City/Town",
        val: "city",
        placeholder: "City/Town",
        name: "city",
        inputType: "text",
      },
      {
        label: "Zip Code",
        val: "zipcode",
        placeholder: "Zip Code",
        name: "zipcode",
        inputType: "text",
      },
      {
        label: "Type",
        val: "",
        placeholder: "Type",
        name: "type",
        inputType: "select",
      },
      {
        label: "Amount of Material Needing to be Picked Up",
        val: "amount",
        placeholder: "Amount of Material Needing to be Picked Up",
        name: "amount",
        inputType: "text",
      },

      {
        label: "Message",
        val: "message",
        placeholder: "Do you have any inquiry? (optional)",
        name: "message",
        inputType: "textArea",
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
  type: string;
  amount: string;
  message?: string;
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
    type: "",
    amount: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const key in formInfo) {
      if (key === "message") continue;

      if (!formInfo[key as keyof FormInfoType]) {
        toast.error("Please fill all fields");
        return;
      }
    }

    try {
      const newSms: FormInfoType = {
        firstname: formInfo.firstname,
        lastname: formInfo.lastname,
        email: formInfo.email,
        phone: formInfo.phone,
        street: formInfo.street,
        city: formInfo.city,
        zipcode: formInfo.zipcode,
        type: formInfo.type,
        amount: formInfo.amount,
        message: formInfo.message,
      };
      const response = await axios.post(
        "http://localhost:3000/api/send-email",
        newSms
      );
      const sms = response.data.sms;

      toast.success(`${sms}`);
      setFormInfo({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        zipcode: "",
        type: "",
        amount: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
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
          {FormArr.map((section, index) => (
            <div key={index} className={styles.formSection}>
              <h6>{section.title}</h6>
              <div className={styles.inputLabelMainContainer}>
                {section.fields.map((field, ind) => (
                  <div key={ind} className={styles.inputLabelContainer}>
                    <label htmlFor={field.placeholder}>
                      {field.label} <span>*</span>
                    </label>

                    {field.inputType === "select" ? (
                      <select
                        name={field.name}
                        id={field.placeholder}
                        className={styles.textInput}
                        value={formInfo[field.name as keyof FormInfoType]}
                        onChange={(e) =>
                          setFormInfo({
                            ...formInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      >
                        <option value="" disabled>
                          Select type of the request
                        </option>
                        <option value="pick-up">PickUp</option>
                        <option value="data-destruction">
                          Data Destruction
                        </option>
                      </select>
                    ) : field.inputType === "textArea" ? (
                      <textarea
                        name={field.name}
                        id={field.placeholder}
                        placeholder={field.placeholder}
                        className={styles.textAreaInput}
                        value={formInfo[field.name as keyof FormInfoType]}
                        onChange={(e) =>
                          setFormInfo({
                            ...formInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      ></textarea>
                    ) : (
                      <input
                        type={field.name === "email" ? "email" : "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        id={field.placeholder}
                        className={styles.textInput}
                        value={formInfo[field.name as keyof FormInfoType]}
                        onChange={(e) =>
                          setFormInfo({
                            ...formInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}
