import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "E-Toy" + " | " + title;
  }, [title]);
};

export default useTitle;
