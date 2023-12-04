import { createContext, useContext, useState, useEffect } from "react";

const SectionKeywordContext = createContext();

export const useSectionKeywordContext = () => useContext(SectionKeywordContext);

export const SectionKeywordProvider = ({ children }) => {
  // global keyword state
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

  // global section state
  const [section, setSection] = useState(() => {
    const storedSection = localStorage.getItem("section");
    return storedSection ? storedSection : "R162-2f-401a";
  });

  const changeSection = (newSection) => {
    if (!newSection) {
      return;
    }

    setSection(newSection);
  };

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <SectionKeywordContext.Provider
      value={{ keyword, changeKeyword, section, changeSection }}
    >
      {children}
    </SectionKeywordContext.Provider>
  );
};
