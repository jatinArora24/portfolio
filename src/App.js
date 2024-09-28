import "./App.css";
//import SectionRender from "./components/sectionRender";
import "./components/cssArt.css";
import React, { Suspense, lazy } from "react";

const SectionRender = lazy(() => import("./components/sectionRender"));

//
import React from "react";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  const _footRef = React.useRef(null);
  function scrollToFooter() {
    _footRef.current?.scrollIntoView();
  }
  return (
    <div className="overflow-y-auto snap-y snap-mandatory scroll-smooth h-screen w-full">
      <div className="rounded-full h-20 w-20 p-3 bg-revolver-100 text-gold-300 flex justify-center items-center border-b-[86px] border-l-[60vw] border-revolver-400 fixed z-50"></div>
      <nav className="w-full h-16 bg-revolver-100 fixed border-2 border-r-[6px] border-revolver-400 rounded-bl z-50">
        <a
          style={{
            textShadow: "1px 1px #2e1e00",
            fontFamily: "Bebas Neue, sans-serif",
          }}
          className="rounded-bl-0 rounded-tl-0 rounded-tr-full rounded-br-full h-40 w-56 p-3 bg-revolver-100 text-gold-300 flex justify-center items-center z-50 font-extrabold text-3xl border-b-4 border-revolver-400 m-r-2"
          href="/"
        >
          <div className="text-center">{"<JATIN ARORA/>"}</div>
        </a>
      </nav>
      <SectionRender
        className={
          "h-75vh w-full bg-revolver-700 flex justify-around snap-start pl-24 pr-24 pt-32 pb-32 flex-col"
        }
      >
        <div className="flex justify-between flex-col h-full">
          <div className="bg-revolver-50 blur-3xl w-64 h-16 opacity-70 relative top-56"></div>
          <div>
            <h1
              className="text-7xl font-bold text-shadow-lg text-gold-50"
              style={{ textShadow: "4px 4px #2e1e00" }}
            >
              Frontend Developer.
            </h1>
            <p className="text-gold-100">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </div>
          <div>
            <p className="text-end bg-gold-50 text-revolver-900 font p-2 rounded-xl">
              Welcome to my online portfolio, find my{" "}
              <button onClick={scrollToFooter}>work</button> in the sections
              below
            </p>
          </div>
          {/* <div className="photo-bg"></div> */}
        </div>
      </SectionRender>
      <ScrollIntoView selector="#footer">
        {/* <button className="">
          Jump to bottom
        </button> */}
      </ScrollIntoView>
      <SectionRender
        className={
          "h-75vh w-full bg-revolver-100 flex justify-center snap-start pl-24 pr-24 pt-32 pb-32"
        }
      >
        <div>hello world</div>
      </SectionRender>
      <SectionRender
        className={
          "h-75vh w-full bg-revolver-300 flex justify-center snap-start pl-24 pr-24 pt-32 pb-32"
        }
      >
        <div>hello world</div>
      </SectionRender>
      <SectionRender
        className={
          "h-screen w-full bg-revolver-900 flex justify-center snap-start pl-24 pr-24 pt-32 pb-32"
        }
      >
        <div id="footer" ref={_footRef}>
          hello world
        </div>
      </SectionRender>
    </div>
  );
}

export default App;
