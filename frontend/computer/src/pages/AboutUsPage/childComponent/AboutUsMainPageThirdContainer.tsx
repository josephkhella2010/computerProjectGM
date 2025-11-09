import { FaRecycle } from "react-icons/fa";
import styles from "../AboutUsMainPage.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const Arr: string[] = [
  "If your company is cleaning out its offices or moving, we can show up on the day you need and haul away any unnecessary electronics. In the past, we have serviced entire office buildings with piles of unwanted computers, printers, and phones. We do all the removal, loading, organizing, and recycling, and at no charge, regardless of the amount of devices.",
  "Over the years, GM Computer Recycle has been proud to offer drop off events where we raise local awareness for electronic recycling, as well as offer you a one-stop option for unloading all your unused electronics. These events, mostly for local residents, have been very productive in recycling thousands of pounds of electronics that might otherwise be dumped into landfills.",
  "At Community and Corporate events, we come to you, and provide a convenient location for recycling. Residents and people at their workplace are provided easy, and safe access. Once again allowing us to save the earth and the people in it.",
  "So far in 2021 we have provided 49 corporate and community-wide events, and look forward to playing an even bigger role in our community service this next year. Year after year, our business continues to see growth in the amount of hazardous electronics we recycle. We would like to see those numbers continue to rise as we partner with you to reduce and eventually eliminate the irresponsible disposal of harmful electronics.",
  "Last year with your help, we were able to recycle millions of pounds of electronic waste; that’s a huge amount of waste that not only is spared from infesting landfills across the country, but is also being recycled back into the market where the materials can be reused.",
  "Along with saving the earth and providing convenient drop off opportunities,  we are proud to support our local community through non-profit organizations and charities. Crime Stoppers, Girls Nite In International, and Kids Voice of Indiana are just a few of the organizations we support which in turn, give back to the community. By supporting us, you are supporting them and the work they do for the children of Indiana.",
];
export default function AboutUsMainPageThirdContainer() {
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  function handleRecycle() {
    navigate("/recycle");
  }
  function handleMouseRecycle() {
    btnRef.current?.focus();
  }
  function handleKeyRecycle(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") {
      handleRecycle();
    }
  }
  return (
    <div className={styles.aboutUsMainPageThirdContainer}>
      <div className={styles.aboutUsMainPageThirdContainerText}>
        {Arr &&
          Arr.map((item, ind) => {
            return <p key={ind}>{item}</p>;
          })}
        <div className={styles.recycleBtn}>
          <button
            ref={btnRef}
            onClick={handleRecycle}
            onMouseEnter={handleMouseRecycle}
            onKeyDown={handleKeyRecycle}
          >
            {" "}
            <FaRecycle />
            Recycle Now
          </button>
        </div>
      </div>
      <img src="/Foto/aboutUsTwo.jpeg" alt="notFound" />
    </div>
  );
}
