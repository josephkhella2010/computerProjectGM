import { FaCheck } from "react-icons/fa6";
import styles from "./CommonAcceptItem.module.css";
interface itemsType {
  item: string[];
}
const items: itemsType[] = [
  {
    item: [
      "Alarm Clocks",
      "Answering Machines",
      "Boomboxes",
      "Cable Boxes",
      "Cables & Cords",
      "Calculators",
      "Cameras",
      "Car Batteries",
      "Car Stereos",
      "CD Players",
      "Cell Phones",
      "Chromebooks",
      "Clock Radios",
      "Computer Speakers",
      "Computer Towers",
      "Conferencing Equipment",
      "Copier Combos",
      "Cordless Telephones",
      "CPU’s",
    ],
  },
  {
    item: [
      "Data Switches",
      "Desktop Copiers",
      "Dot Matrix Printers",
      "Drives (CD Rom, Floppy, etc)",
      "DVD Players",
      "Fax Machines",
      "Flatscreen Monitors",
      "Game Consoles",
      "Game Controllers",
      "Hard Drives",
      "Home Stereo Speakers",
      "Home Stereos",
      "Hubs",
      "Ink & Toner",
      "Inkjet Printer",
      "iPods, iPads, iPhones",
      "Joysticks",
      "Keyboards",
      "Kindles/Nooks (eReaders)",
    ],
  },
  {
    item: [
      "Laptop Computers",
      "Laptop Docking Stations",
      "Laser Printers",
      "Loose Circuit Boards",
      "Mice",
      "Microwave Ovens",
      "Modems (cable & standard)",
      "Monitors (LED, LCD, flatscreen only)",
      "Movie/Slide Projects",
      "MP3 Players",
      "Paper Shredders",
      "PC Parts & Pieces",
      "PC’s",
      "PDA’s",
      "Power Strips",
      "Rechargeable Batteries (NiCad, NiMH, Li-Ion, Lead Acid)",
      "Record Player/Turntables",
    ],
  },
  {
    item: [
      "Routers",
      "Satellite Receivers",
      "Scanners",
      "Servers",
      "Small Bathroom Appliances",
      "Small Kitchen Appliances",
      "Speakers",
      "Stereo/Home Receivers",
      "Subwoofers",
      "Surge Protectors",
      "Tablets",
      "Telephones (any type)",
      "Trackballs",
      "TV’s (LCD, LED, flatscreen)",
      "Typewriters",
      "UPS Power Supplies",
      "VCR/DVD Combos",
      "VCRs",
      "Video Cameras",
    ],
  },
];
export default function CommonAcceptItem() {
  return (
    <div className={styles.whatAcceptSecondContainer}>
      <div className={styles.whatAcceptSecondContainerMainSection}>
        <div className={styles.whatAcceptSecondContainerMainSectionTopSection}>
          <div
            className={styles.whatAcceptSecondContainerMainSectionleftContent}
          >
            <h4>Accepted Items</h4>
            <h1>Items We Accept</h1>
          </div>
          <p
            className={styles.whatAcceptSecondContainerMainSectionRightContent}
          >
            Our accepted items encompass a wide range of electronics, ensuring
            comprehensive disposal solutions for your electronic waste. From
            computers and laptops to smartphones and peripherals, we accept
            various devices to facilitate responsible recycling and resource
            recovery.
          </p>
        </div>
        <div className={styles.itemContainer}>
          {items.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.itemSection}>
              {group.item.map((name, index) => (
                <li
                  key={`${groupIndex}-${index}`}
                  className={styles.itemContent}
                >
                  <FaCheck className={styles.checkedIcon} />
                  {name}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
