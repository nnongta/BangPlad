import React from "react";

type Language = "th" | "en";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div>
      <button
        onClick={() => onLanguageChange("th")}
        style={{
          backgroundColor: currentLanguage === "th" ? "#DF7E54" : "#ffffff",
          padding: "8px 16px",
          margin: "10px 5px 0 15px",
          cursor: "pointer",
        }}
      >
        ภาษาไทย
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        style={{
          backgroundColor: currentLanguage === "en" ? "#DF7E54" : "#ffffff",
          padding: "8px 16px",
          margin: "0 5px",
          cursor: "pointer",
        }}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
