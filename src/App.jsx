import React, { useState } from "react";
import {
  Banner,
  Extras,
  Footer,
  Header,
  Hero,
  SearchBar,
} from "./Components/index";

const App = () => {
  const [dark, setDark] = useState(false);
  const [fixed, setFixed] = useState(false);

  return (
    <div className={`${dark ? "bg-black" : "bg-white"} ${fixed && "fixed"}`}>
      {fixed && (
        <div
          className={`h-[100vh] w-[100vw] ${
            dark ? "bg-black/60" : "bg-black/30"
          } absolute z-10 flex justify-center items-start`}
          onClick={() => {
            setFixed((prevValue) => !prevValue);
          }}
        >
          <SearchBar dark={dark} />
        </div>
      )}
      <Header dark={dark} setDark={setDark} setFixed={setFixed} />
      <Hero dark={dark} />
      <Banner dark={dark} />
      <Extras dark={dark} />
      <Footer dark={dark} />
    </div>
  );
};

export default App;
