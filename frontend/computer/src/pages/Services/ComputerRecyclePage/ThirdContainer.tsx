import { useLocation } from "react-router-dom";
import styles from "./ComputerRecyclePage.module.css";

interface ArrType {
  title: string;
  body: React.ReactNode;
}
const Arr: ArrType[] = [
  {
    title: "Desktops",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          Towers & bulky units are accepted at Precision, as long as they still
          have their electrical components inside the towers.
        </p>
      </>
    ),
  },
  {
    title: "Laptops & Notes",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          Most bulk laptop pickups will qualify for free pickup, regardless of
          brand or type of laptop.
        </p>
      </>
    ),
  },
  {
    title: "All In One PCs",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          We also recycle PCs that are combination units which may include the
          monitor as part of the GPU.
        </p>
      </>
    ),
  },
];
const ArrServer: ArrType[] = [
  {
    title: "Rack Systems",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          Dell PowerEdge (R640, R740, R750), HP ProLiant (DL360, DL380, DL580),
          Cisco UCS (C220, C240), Lenovo ThinkSystem, Supermicro servers – 1U,
          2U, and 4U configurations.
        </p>
      </>
    ),
  },
  {
    title: "Storage Systems",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          Dell EMC Unity, PowerStore, VNX, Isilon; NetApp FAS, AFF series; HP
          3PAR, MSA, StoreOnce; Pure Storage FlashArray; SAN, NAS, and DAS
          configurations with disk shelves.{" "}
        </p>
      </>
    ),
  },
  {
    title: "Network Infrastructure",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          APC Smart-UPS, Symmetra, Galaxy UPS systems; Eaton 9PX series;
          Raritan, APC KVM switches; PDUs (power distribution units); server
          racks and cable management systems.
        </p>
      </>
    ),
  },
];
const ArrSDestruction: ArrType[] = [
  {
    title: "Physical Destruction",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          Complete physical destruction of storage devices using industrial
          shredders and crushers.
        </p>
        <ul className={styles.ComputerRecyclePageThirdContainerMenu}>
          <li>Hard drive shredding.</li>
          <li>SSD destruction.</li>
          <li>Tape media destruction.</li>
          <li>Mobile device crushing.</li>
        </ul>
      </>
    ),
  },
  {
    title: "DOD Data Wiping",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          Multi-pass data overwriting using Department of Defense 5220.22-M
          standards.
        </p>
        <ul className={styles.ComputerRecyclePageThirdContainerMenu}>
          <li>3-pass minimum overwriting.</li>
          <li>Verification scans.</li>
          <li>Sanitization reports.</li>
          <li>Chain of custody tracking.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Degaussing Services",
    body: (
      <>
        <p className={styles.ComputerRecyclePagePara}>
          On-site witnessed destruction with video documentation for maximum
          security assurance.
        </p>
        <ul className={styles.ComputerRecyclePageThirdContainerMenu}>
          <li>Customer witnessing.</li>
          <li>Video documentation.</li>
          <li>Real-time reporting.</li>
          <li>Immediate certification.</li>
        </ul>
      </>
    ),
  },
];
export default function ThirdContainer() {
  const location = useLocation();
  const path = location.pathname;
  let currentArr: ArrType[] = [];
  function getCurrentArr() {
    if (path === "/computer-recycle-page") currentArr = Arr;
    else if (path === "/server-recycle-page") currentArr = ArrServer;
    else if (path === "/destruction-data-service-page")
      currentArr = ArrSDestruction;

    return currentArr;
  }

  return (
    <div className={styles.ComputerRecyclePageThirdContainerMainContainer}>
      {getCurrentArr() &&
        getCurrentArr().map((item, index) => {
          return (
            <div
              key={index}
              className={styles.ComputerRecyclePageThirdContainerSection}
            >
              <h3> {item.title}</h3>
              {item.body}
            </div>
          );
        })}
    </div>
  );
}
