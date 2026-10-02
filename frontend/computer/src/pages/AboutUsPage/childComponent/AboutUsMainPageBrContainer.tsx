import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutUsMainPageFifthContainerBottom: {
    width: "100%",
    height: "200px",
    backgroundColor: "#f7f7f7",
  },
});
export default function AboutUsMainPageBrContainer() {
  const classes = useStyles();
  return <div className={classes.aboutUsMainPageFifthContainerBottom}></div>;
}
