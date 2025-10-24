import styles from "../recycle.module.css";
import type { FormInfoType, FormSectionType } from "../RecyclePage";
interface PropsType {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  FormArr: FormSectionType[];
  setFormInfo: (formInfo: FormInfoType) => void;
  formInfo: FormInfoType;
}
export default function FormSection({
  handleSubmit,
  FormArr,
  setFormInfo,
  formInfo,
}: PropsType) {
  return (
    <>
      <div className={styles.recycleMiddleContainerLeftSection}>
        <h5>See If You Qualify For Free Pickup</h5>
        <p className={styles.recycleMiddleContainerLeftSectionFirstPara}>
          Basic recycling is FREE for residents of Lincoln. Not all pickups are
          free based on volume.
        </p>
        <form
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
                                type="text"
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
    </>
  );
}
