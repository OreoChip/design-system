import { container, title } from "design-system/assets/jss/material-kit-react.jsx";
import headerLinksStyle from "design-system/assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import {
  defaultFont
} from "design-system/assets/jss/material-kit-react.jsx";
const navbarsStyle = theme => ({
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  },
  mainText: {
    fontSize: 35,
    fontWeight: "bold"
  },
  subText: {
    fontSize: 15
  },
  brandContainter: {
    width: 200,
    textAlign: "center"
  }
});

export default navbarsStyle;
