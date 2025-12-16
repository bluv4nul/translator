import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = "dict.1.1.20251216T111821Z.6202cf3de6042a9f.77b9082e605be1a0e54bc6bc526ea463705eeba7"

const doTranslation = async (input, languageCode) => {
  let url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${KEY}&lang=ru-${languageCode}&text=${input}`;
  try {
    const { data } = await axios.post(url);
    return data.def[0].tr[0].text;
  } catch (err) {
    return "";
  }
};

export default ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};
