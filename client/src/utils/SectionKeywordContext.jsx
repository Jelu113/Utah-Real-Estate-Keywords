import { createContext, useContext, useState, useEffect } from "react";

const SectionKeywordContext = createContext();

export const useSectionKeywordContext = () => useContext(SectionKeywordContext);

export const SectionKeywordProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(() => {
    const storedKeyword = localStorage.getItem("keyword");
    return storedKeyword ? storedKeyword : "Lender disclosure";
  });

  const changeKeyword = (newKeyword) => {
    if (!newKeyword) {
      return;
    }

    setKeyword(newKeyword);
  };

  useEffect(() => {
    localStorage.setItem("keyword", keyword);
  }, [keyword]);

  return (
    <SectionKeywordContext.Provider value={{ keyword, changeKeyword }}>
      {children}
    </SectionKeywordContext.Provider>
  );
};
