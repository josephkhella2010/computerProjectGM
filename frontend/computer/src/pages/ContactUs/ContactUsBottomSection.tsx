/* import CommonFormSection from "../../common Component/CommonFormSection";
import styles from "./contactUs.module.css";
export default function ContactUsBottomSection() {
  return (
    <div className={styles.contactUsBottomSection}>
      <div>
        <CommonFormSection />
      </div>

      <div className={styles.contactUsBottomInnerSection}>
        <img src="Foto/map.png" alt="no foto" />{" "}
        <div className={styles.contactUsBottomInnerSectionText}>
          <p>
            <a
              href="https://www.google.com/maps/place/10095+Hickman+Ct+Suite+1,+Clive,+IA+50325/@41.6143267,-93.7595934,17z/data=!3m1!4b1!4m6!3m5!1s0x87ec20b1645479df:0x81d409d634e11370!8m2!3d41.6143227!4d-93.7570185!16s%2Fg%2F11rwm12q_y?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              10095 ,Hickman ct unit 1, Iowa ,Clive,50325
            </a>{" "}
          </p>
          <p>United States</p>
          <p>
            <a href="tel:+15156812487">+15156812487</a>{" "}
          </p>
          <p>
            <a href="mailto:info@gmcomputerrecycle.com">
              info@gmcomputerrecycle.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
 */
import CommonFormSection from "../../common Component/CommonFormSection";
import styles from "./contactUs.module.css";

export default function ContactUsBottomSection() {
  return (
    <section className={styles.contactUsBottomSection}>
      <div className={styles.contactUsContainer}>
        {/* LEFT - FORM */}
        <div className={styles.contactUsFormCard}>
          <div className={styles.sectionHeading}>
            <span>GET IN TOUCH</span>

            <h2>Let’s Talk About Your Recycling Needs</h2>

            <p>
              Have electronics to recycle or need more information about our
              services? Contact GM Computer Recycle and our team will be happy
              to help.
            </p>
          </div>

          <CommonFormSection />
        </div>

        {/* RIGHT - CONTACT */}
        <div className={styles.contactUsInfoCard}>
          {/* MAP */}
          <div className={styles.contactUsMap}>
            <img src="/Foto/map.png" alt="GM Computer Recycle location" />

            <a
              className={styles.viewMapButton}
              href="https://www.google.com/maps/place/GM+COMPUTER+LLC/@41.6143267,-93.7595934,17z/data=!3m1!4b1!4m6!3m5!1s0x87ec210e4f44c319:0x26c0ea6442e0e755!8m2!3d41.6143227!4d-93.7570185!16s%2Fg%2F11smk5wnjg?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>

          {/* CONTACT DETAILS */}
          <div className={styles.contactUsDetails}>
            <div className={styles.contactDetailsHeader}>
              <span>CONTACT US</span>

              <h3>GM Computer Recycle</h3>

              <p>We are here to help with your electronics recycling needs.</p>
            </div>

            <div className={styles.contactDetailsList}>
              {/* ADDRESS */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <span>⌖</span>
                </div>

                <div className={styles.contactItemContent}>
                  <span>Our Location</span>

                  <a
                    href="https://www.google.com/maps/place/GM+COMPUTER+LLC/@41.6143267,-93.7595934,17z/data=!3m1!4b1!4m6!3m5!1s0x87ec210e4f44c319:0x26c0ea6442e0e755!8m2!3d41.6143227!4d-93.7570185!16s%2Fg%2F11smk5wnjg?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    10095 Hickman Ct, Unit 1 , Clive, IA 50325
                    <br />
                    United States
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <span>☎</span>
                </div>

                <div className={styles.contactItemContent}>
                  <span>Phone</span>

                  <a href="tel:+15156812487">+1 (515) 681-2487</a>
                </div>
              </div>

              {/* EMAIL */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <span>✉</span>
                </div>

                <div className={styles.contactItemContent}>
                  <span>Email</span>

                  <a href="mailto:info@gmcomputerrecycle.com">
                    info@gmcomputerrecycle.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
