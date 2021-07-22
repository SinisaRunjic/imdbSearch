import { KeyboardEvent } from "react";
export interface IAppBar {
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}
