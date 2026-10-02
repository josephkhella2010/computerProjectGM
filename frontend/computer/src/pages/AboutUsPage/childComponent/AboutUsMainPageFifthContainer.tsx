import { createUseStyles } from "react-jss";

type ArrType = {
  img: string;
  para: string[];
}[];

const Arr: ArrType = [
  {
    img: "/Foto/aboutUsFoto1.jpg",
    para: [
      "We are committed to constantly growing, moving forward, and improving every aspect of our promise. Quality of service, your convenience and satisfaction, the health and safety for our workers, and a commitment to the environment are all foundational values of our company. We want to earn your trust as the number one provider of electronic recycling service.",
    ],
  },
  {
    img: "/Foto/aboutUsFoto3.jpg",
    para: [
      "If you have any questions about our process or availability, feel free to give us a call or email us and we will get you the information you need. No detail is too small for our team’s attention. We are committed to earning your trust as the source for environmentally friendly, secure, and convenient electronic recycling.",

      "Our primary target is corporate America, large and small businesses. TR specializes and provides recycling services of electronics, and all IT items, and focuses on Legal, Ethical and 100% destruction of memory related items. All at NO Cost to you – Free, Ethical, Safe, Licensed, Insured, We pride ourselves in clean equipment and fast and punctual scheduling. Let US solve your IT and Electronic Disposal Problem, we are IDEM Bonded.",
    ],
  },
  {
    img: "/Foto/aboutThree.jpg",
    para: [
      "Aside from these personal electronics, we also work with businesses that have needs as wide-ranging as printers, copiers, telecommunication and IT equipment, medical electronics, and all the connecting, wiring, and cabling racks that go with them. Over the years, we have serviced corporate businesses, healthcare facilities, hospitals, schools, legal systems, government contracts, and more.",
    ],
  },
];

const useStyles = createUseStyles({
  aboutUsMainPageFifthContainer: {
    width: "100%",
    padding: "100px 20px",
  },

  aboutUsMainPageFifthMainSection: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",

    display: "flex",
    flexDirection: "column",
    gap: "100px",
  },

  aboutUsSection: {
    width: "100%",

    display: "grid",
    gridTemplateColumns: "50% 40%",
    justifyContent: "space-between",

    alignItems: "start",

    minHeight: "500px",

    "&:nth-child(even)": {
      gridTemplateColumns: "40% 50%",

      "& $aboutUsMainPageFifthContainerImgSection": {
        gridColumn: "2",
        gridRow: "1",
      },

      "& $aboutUsMainPageFifthContainerTextSection": {
        gridColumn: "1",
        gridRow: "1",
      },
    },

    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",

      gap: "30px",

      minHeight: "auto",

      "&:nth-child(even)": {
        display: "flex",
        flexDirection: "column",

        "& $aboutUsMainPageFifthContainerImgSection": {
          gridColumn: "1",
          gridRow: "1",
        },

        "& $aboutUsMainPageFifthContainerTextSection": {
          gridColumn: "1",
          gridRow: "2",
        },
      },
    },
  },

  aboutUsMainPageFifthContainerImgSection: {
    width: "100%",
    height: "500px",

    overflow: "hidden",

    borderRadius: "6px",

    "& img": {
      display: "block",

      width: "100%",
      height: "100%",

      objectFit: "cover",

      transition: "transform 0.5s ease",
    },

    "&:hover img": {
      transform: "scale(1.03)",
    },

    "@media (max-width: 700px)": {
      height: "400px",
    },

    "@media (max-width: 500px)": {
      height: "300px",
    },
  },

  aboutUsMainPageFifthContainerTextSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "stretch",

    minHeight: "500px",

    "& p": {
      margin: 0,

      width: "100%",

      fontSize: "17px",
      lineHeight: 1.8,

      color: "#333",
      fontWeight: 600,
    },

    "& p + p": {
      marginTop: "50px",
    },

    "@media (max-width: 700px)": {
      minHeight: "auto",

      "& p": {
        fontSize: "16px",
        lineHeight: 1.7,
      },

      "& p + p": {
        marginTop: "30px",
      },
    },

    "@media (max-width: 500px)": {
      "& p": {
        fontSize: "15px",
        lineHeight: 1.65,
      },
    },
  },
  aboutUsMainPageFifthContainerBottom: {
    width: "100%",
    height: "100px",
    backgroundColor: "#ffffff",
  },
});

export default function AboutUsMainPageFifthContainer() {
  const classes = useStyles();

  return (
    <section className={classes.aboutUsMainPageFifthContainer}>
      <div className={classes.aboutUsMainPageFifthMainSection}>
        {Arr.map((item, ind) => (
          <div className={classes.aboutUsSection} key={`${item.img}-${ind}`}>
            {/* IMAGE */}

            <div className={classes.aboutUsMainPageFifthContainerImgSection}>
              <img src={item.img} alt={`About us ${ind + 1}`} />
            </div>

            {/* TEXT */}

            <div className={classes.aboutUsMainPageFifthContainerTextSection}>
              {item.para.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
