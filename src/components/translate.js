import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = "dict.1.1.20251216T111821Z.6202cf3de6042a9f.77b9082e605be1a0e54bc6bc526ea463705eeba7"

const doTranslation = async (input, cancelToken) => {
  if (!input) return "";
  const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${KEY}&lang=ru-en&text=${encodeURIComponent(
    input
  )}`;
  try {
    const { data } = await axios.get(url, { cancelToken: cancelToken?.token });
    if (data && Array.isArray(data.def) && data.def[0] && Array.isArray(data.def[0].tr) && data.def[0].tr[0]) {
      return data.def[0].tr[0].text || "";
    }
    return "";
  } catch (err) {
    return "";
  }
};


export default ({ text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      setTranslated("");
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text]);

  return <h1 className="title">{translated}</h1>;
};
