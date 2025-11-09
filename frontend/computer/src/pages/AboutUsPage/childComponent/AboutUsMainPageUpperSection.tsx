import styles from "../AboutUsMainPage.module.css";

export default function AboutUsMainPageUpperSection() {
  return (
    <div className={styles.aboutUsMainPageUpperContainer}>
      <h1>We Recycle Computers and Electronics</h1>
      <div className={styles.aboutUsMainPageUpperContainerMainSection}>
        <h2> About GM Computer Recycle</h2>
        <div className={styles.aboutUsMainPageUpperContainerSection}>
          <div className={styles.aboutUsMainPageUpperContainerSectionText}>
            {/*  {Arr.map((item, ind) => {
              return <p key={ind}>{item}</p>;
            })} */}
            <p>
              Founded in 2018, GM Computer recycle is your trusted partner in
              responsible electronics recycling and high-quality refurbished
              devices. Based in Iowa, we are committed to making technology
              reuse easier, safer, and more environmentally responsible — all at
              no cost to you. What We Do: Free electronics pickup for
              businesses, schools, and individuals Certified, eco-friendly
              recycling — 100% landfill-free Competitive offers for used
              computers, laptops, and electronics Fast response and professional
              support every step of the ways Our Vision: To lead the way in
              building a greener, smarter future by making electronic recycling
              accessible and effortless, while offering refurbished devices that
              are both reliable and affordable — reducing waste and serving our
              planet. GM Computer LLC — Bringing technology back to life and
              protecting the future of our planet, one device at a time.
            </p>
          </div>
          <img src="/Foto/aboutUsRecycleTwo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
