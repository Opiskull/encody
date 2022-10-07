import "./App.css";
import { useState } from "react";

const encodeMap = {
  Ä: "\\u00c4",
  ä: "\\u00e4",
  Ö: "\\u00d6",
  ö: "\\u00f6",
  Ü: "\\u00dc",
  ü: "\\u00fc",
  ß: "\\u00df",
};

const replaceValues = (value) =>
  Object.entries(encodeMap).reduce(
    (prev, [k, v]) => prev.replaceAll(k, v),
    value
  );

function App() {
  const [value, setValue] = useState("");
  const [encodedValue, setEncodedValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setEncodedValue(replaceValues(e.target.value));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h1>input</h1>
        <div>
          <textarea
            style={{ width: "100%", height: "350px", resize: "none" }}
            value={value}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div>
        <h1>output</h1>
        <div>
          <textarea
            style={{ width: "100%", height: "350px", resize: "none" }}
            readOnly={true}
            value={encodedValue}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
