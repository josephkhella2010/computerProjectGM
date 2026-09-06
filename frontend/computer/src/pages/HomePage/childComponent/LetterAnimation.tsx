import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  word: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 0px 20px 0px",
    width: "100%",
  },

  letter: {
    display: "inline-block",

    opacity: 0,
    color: "white",
    textShadow: `
  0 0 5px #edadb6,
  0 0 10px #edadb6,
  0 0 20px #edadb6,
  0 0 30px #edadb6,
  0 0 50px #edadb6
`,

    fontSize: "40px",
    "@media (max-width: 600px)": {
      fontSize: "30px",
    },
  },

  letterAnimation: {
    animation: "$ShowLetter 1s ease forwards",
  },

  "@keyframes ShowLetter": {
    "0%": {
      opacity: 0,
      transform: "scale(1.5)",
    },

    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  /*
   * =========================
   * SLOW WAVE ANIMATION
   * =========================
   */
  waveLetter: {
    display: "inline-block",
    animation: "$WaveLetter 4s linear infinite",
    willChange: "transform",
  },

  "@keyframes WaveLetter": {
    "0%": {
      transform: "translateY(0px)",
    },

    "5%": {
      transform: "translateY(-2px)",
    },

    "10%": {
      transform: "translateY(-4px)",
    },

    "15%": {
      transform: "translateY(-6px)",
    },

    "20%": {
      transform: "translateY(-8px)",
    },

    "25%": {
      transform: "translateY(-10px)",
    },

    "30%": {
      transform: "translateY(-8px)",
    },

    "35%": {
      transform: "translateY(-6px)",
    },

    "40%": {
      transform: "translateY(-4px)",
    },

    "45%": {
      transform: "translateY(-2px)",
    },

    "50%": {
      transform: "translateY(0px)",
    },

    "55%": {
      transform: "translateY(2px)",
    },

    "60%": {
      transform: "translateY(4px)",
    },

    "65%": {
      transform: "translateY(6px)",
    },

    "70%": {
      transform: "translateY(8px)",
    },

    "75%": {
      transform: "translateY(10px)",
    },

    "80%": {
      transform: "translateY(8px)",
    },

    "85%": {
      transform: "translateY(6px)",
    },

    "90%": {
      transform: "translateY(4px)",
    },

    "95%": {
      transform: "translateY(2px)",
    },

    "100%": {
      transform: "translateY(0px)",
    },
  },
});

export default function GMComputerAnimation() {
  const classes = useStyles();

  const word = "GM Computer Recycle";

  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  const [finishedScale, setFinishedScale] = useState<boolean>(false);

  const lastIndex = word.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={classes.word}>
      {word.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={`
            ${classes.letter}
            ${startAnimation ? classes.letterAnimation : ""}
          `}
          style={{
            animationDelay: startAnimation ? `${index * 500}ms` : "0ms",
          }}
          onAnimationEnd={(event) => {
            if (!event.animationName.includes("ShowLetter")) {
              return;
            }

            setCurrentIndex(index);

            if (index === lastIndex) {
              setFinishedScale(true);
            }
          }}
        >
          {finishedScale ? (
            <span
              className={classes.waveLetter}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ) : letter === " " ? (
            "\u00A0"
          ) : (
            letter
          )}
        </span>
      ))}
    </div>
  );
}
