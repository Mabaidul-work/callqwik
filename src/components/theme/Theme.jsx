import React from "react";
import theme from "../../constants/themes.json";

const Theme = () => {
  const themeKeys = Object.keys(theme);
  console.log("keys", themeKeys);
  console.log("theme component");
  

  return (
    <div className="flex flex-col items-start justify-start gap-10 px-10">
      <h1>Themes</h1>
      {/* {themeKeys.map((themeKey) => (
        <div
          key={themeKey}
          className="flex flex-col items-start justify-start gap-2"
        >
          <h2>{themeKey}</h2>
          <div className="flex items-start justify-start gap-5">
            {Object.keys(theme[themeKey]).map((themeItem) => (
              <div
                key={themeItem}
                className="flex flex-col items-center justify-center gap-1"
              >
                <h2>{themeItem}</h2>
                <div
                  className="w-20 h-20"
                  style={{
                    backgroundColor: theme[themeKey][themeItem],
                  }}
                ></div>
                <p>{theme[themeKey][themeItem]}</p>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Theme;
