/* import React, { useState } from "react";
const formArr = [
  { label: "First Name", val: "firstname", name: "firstname" },
  { label: "Last Name", val: "lastname", name: "lastname" },
  { label: "Email", val: "email", name: "email" },
  { label: "Password", val: "password", name: "password" },
];
export default function Test() {
  const [formInfo, setFormInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <form action="">
      {formArr &&
        formArr.map((item, ind) => {
          return (
            <div>
              <label htmlFor="">{item.label}</label>
              <input
                type="text"
                name={item.val}
                value={formInfo[item.val as keyof typeof formInfo]}
                onChange={(e) =>
                  setFormInfo({
                    ...formInfo,
                    [item.name]: e.target.value,
                  })
                }
              />
            </div>
          );
        })}
    </form>
  );
}
 */
