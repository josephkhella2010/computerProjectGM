import styles from "../AboutUsMainPage.module.css";
const Arr: string[] = [
  "Welcome to Technology Recyclers, the Official Sponsors of Tomorrow. We are an Indiana Veteran Owned Company, operating from Indianapolis, providing computer electronics recycling services to all of Indiana. Through community partnerships and personal responsibility, you can join with us to provide a better future for our world. It’s our mission is to save the earth and the people in it.",
  "While we are unique, we are not new. We were formed as a company in 2011, with our partners and team educated and trained with previous business and  recycling experience, to provide focused and specialized services for our clients – Our purpose is to solve your disposal needs, through ethical recycling! Saving the earth and the people in it is what Technology Recyclers is all about. We are proud to be 100% landfill free.",
  "Possibly the best feature of our business model is that all the pickup services we offer are completely free. On top of this, we do the work of loading all your electronics into our vehicles and hauling them away. We have our own corporate pickup and disposal trucks and can offer scheduled pickups for whatever time and place is most convenient for you.",
  "And if you are a school or business that needs regular service, we are able to schedule regular repeat pickups, again, at no charge to you. If there’s a bulk order, we will even organize the devices for you into the different categories needed before processing. Our vehicles are usually able to respond within 48 hours, providing you with the kind of quick, efficient, and convenient service we demand of ourselves.",
  "When we say free, we mean it. We handle all the logistics and all the problems, at no cost to you. No charge for estimates, no processing costs, and no hidden fees. Not only is it free, using our service is a promise to future generations that the world will be bright and clean for many years to come.",
];
export default function AboutUsMainPageUpperSection() {
  return (
    <div className={styles.aboutUsMainPageUpperContainer}>
      <h1>We Recycle Computers and Electronics</h1>
      <div className={styles.aboutUsMainPageUpperContainerMainSection}>
        <h2>Who We Are</h2>
        <div className={styles.aboutUsMainPageUpperContainerSection}>
          <div className={styles.aboutUsMainPageUpperContainerSectionText}>
            {Arr.map((item, ind) => {
              return <p key={ind}>{item}</p>;
            })}
          </div>
          <img src="/Foto/aboutUsRecycleTwo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
