import { FC } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import appTheme from "./theme";

const ThemeProvider: FC = ({ children }) => (
  <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
