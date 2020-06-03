import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#00243f"
const arcOrange = "#b0bec5"

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    seconday: {
      main: `${arcOrange}`
    }
  },
    typography: {
      tab: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: "700",
        fontSize: "1rem",
        color: 'arcBlue'
      }
    },
    overrides: {
      MuiInputLabel: {
        root:{
          color: arcBlue,
          fontSize: "1rem"
        }
      },
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: `2px solid ${arcBlue} `
          },
          "&hover:not($disabled):not($focused):not($error):before":{
              borderBottom: `2px solid ${arcBlue} `
          }
        }
      }
    }
});
