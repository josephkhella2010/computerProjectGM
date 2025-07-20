import React from "react";
import styles from "./contactUs.module.css";
export default function ContactUsBottomSection() {
  return (
    <div className={styles.contactUsBottomSection}>
      <div className={styles.contactUsBottomInnerSection}>
        <img src="/Foto/map.png" alt="no foto" />
        <div className={styles.contactUsBottomInnerSectionText}>
          <p>
            <a
              href="https://www.google.com/maps/place/10095+Hickman+Ct+Suite+1,+Clive,+IA+50325/@41.6143267,-93.7595934,17z/data=!3m1!4b1!4m6!3m5!1s0x87ec20b1645479df:0x81d409d634e11370!8m2!3d41.6143227!4d-93.7570185!16s%2Fg%2F11rwm12q_y?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank">
              10095 ,Hickman ct unit 1, Iowa ,Clive,50325
            </a>{" "}
          </p>
          <p>United States</p>
          <p>
            <a href="tel:+15156812487">+15156812487</a>{" "}
          </p>
          <p>
            <a href="mailto:GMcomputerllc@yahoo.com">GMcomputerllc@yahoo.com</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
