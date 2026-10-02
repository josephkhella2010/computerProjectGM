import { createUseStyles } from "react-jss";
const Arr = [
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
  "GM Computer Recycle",
];

const useStyles = createUseStyles({
  mainContainer: {
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  sliderSection: {
    backgroundColor: "#c75353",
    width: "100%",
    overflow: "hidden",
    padding: "40px 10px",
    borderRadius: "10px",
  },

  sliderContent: {
    display: "flex",
    width: "max-content",
    gap: "20px",

    animation: "$scroll 30s linear infinite",

    "& p": {
      color: "rgb(9 13 28 / 92%)",
      flexShrink: 0,
      fontSize: "24px",
      fontWeight: 800,
      fontFamily: '"Exo 2", sans-serif',
      whiteSpace: "nowrap",

      textShadow: "0 0 0 #4f93ff",
      animation: "$neonPulse 1.5s ease-in-out infinite alternate",
    },
  },

  "@keyframes scroll": {
    from: {
      transform: "translateX(0)",
    },

    to: {
      transform: "translateX(calc(-50% - 10px))",
    },
  },
  "@keyframes neonPulse": {
    "0%": { textShadow: "0 0 0 #4f93ff" },
    "30%": {
      textShadow: ` 0 0 5px #4f93ff, 0 0 10px #4f93ff, 0 0 15px #4f93ff, 0 0 20px #4f93ff, 0 0 30px #4f93ff `,
    },
    "50%": {
      textShadow: ` 0 0 5px #4f93ff, 0 0 10px #4f93ff, 0 0 15px #4f93ff, 0 0 20px #4f93ff, 0 0 30px #4f93ff `,
    },
    "80%": {
      textShadow: ` 0 0 5px #4f93ff, 0 0 10px #4f93ff, 0 0 15px #4f93ff, 0 0 20px #4f93ff, 0 0 30px #4f93ff `,
    },
    "100%": { textShadow: "0 0 0 #4f93ff" },
  },
});

export default function TrackTitle() {
  const classes = useStyles();

  const ArrTwo = [...Arr, ...Arr];
  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.sliderSection}>
          <div className={classes.sliderContent}>
            {ArrTwo.map((item, index) => (
              <p key={`${item}-${index}`}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
