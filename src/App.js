import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [name] = useState("Mateus");
  const { t, i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("greeting-title", { name })}</h1>
        <button onClick={() => handleChangeLanguage("pt-br")}>
          change to pt-br
        </button>
        <button onClick={() => handleChangeLanguage("en")}>change to en</button>
      </header>
    </div>
  );
}

export default App;
