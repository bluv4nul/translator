/* eslint-disable */
import React, { useState } from "react";

const LANGUAGES = [
  { label: "Belarusian", value: "be" },
  { label: "Bulgarian", value: "bg" },
  { label: "Czech", value: "cs" },
  { label: "Danish", value: "da" },
  { label: "German", value: "de" },
  { label: "Greek", value: "el" },
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Estonian", value: "et" },
  { label: "Finnish", value: "fi" },
  { label: "French", value: "fr" },
  { label: "Hungarian", value: "hu" },
  { label: "Italian", value: "it" },
  { label: "Lithuanian", value: "lt" },
  { label: "Latvian", value: "lv" },
  { label: "Eastern Mari", value: "mhr" },
  { label: "Western Mari", value: "mrj" },
  { label: "Dutch", value: "nl" },
  { label: "Norwegian", value: "no" },
  { label: "Polish", value: "pl" },
  { label: "Portuguese", value: "pt" },
  { label: "Brazilian Portuguese", value: "pt-BR" },
  { label: "Russian", value: "ru" },
  { label: "Slovak", value: "sk" },
  { label: "Swedish", value: "sv" },
  { label: "Turkish", value: "tr" },
  { label: "Tatar", value: "tt" },
  { label: "Ukrainian", value: "uk" },
  { label: "Chinese", value: "zh" }
];

const Languages = ({ language, onLanguageChange }) => {
  if (language === undefined) {
    language = "en";
  }
  const languageConfig = LANGUAGES.find((l) => l.value === language);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'`);
  }

  const [open, setOpen] = useState(false);

  const onSelect = (language) => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div>
      <label className="label">Введите язык</label>
      <div className={`dropdown ${open && "is-active"}`}>
        <div className="dropdown-trigger">
          <button className="button" onClick={() => setOpen(!open)}>
            <span>{languageConfig.label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {LANGUAGES.map(({ label, value }) => {
              return (
                <a
                  key={Math.random()}
                  href="#"
                  onClick={() => onSelect(value)}
                  className="dropdown-item"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
