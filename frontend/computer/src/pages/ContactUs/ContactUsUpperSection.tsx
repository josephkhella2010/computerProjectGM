import styles from "./contactUs.module.css";
export default function ContactUsUpperSection() {
  return (
    <div className={styles.contactUsUpperSection}>
      <div className={styles.contactUsUpperContent}>
        <div className={styles.contactUsUpperInnerContent}>
          <h1>Get in touch</h1>

          <p>
            Want to get in touch? we'd love to hear from you.Here's how you can
            reach us{" "}
          </p>
        </div>
        <img src="https://amplify-computer-deployment.s3.amazonaws.com/foto/contactUs.webp" />
      </div>
    </div>
  );
}
