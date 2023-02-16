import { useContext } from "react";
import { DialogContext } from "../contexts";

export const useDialog = () => {
  const { setOpen, setContent, setTitle } = useContext(DialogContext);

  const showDialog = (
    content = "Let Google help apps determine location.",
    title = "Use Google's location service?"
  ) => {
    setContent(content);
    setTitle(title);
    setOpen(true);
  };
  return showDialog;
};
