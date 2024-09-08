import "./App.css";
import SectionRender from "./components/sectionRender";
//
function App() {
  return (
    <div className="overflow-y-auto snap-y snap-mandatory scroll-smooth h-screen w-full">
      <div className="rounded-full h-20 w-20 p-3 bg-revolver-100 text-gold-300 flex justify-center items-center border-b-[86px] border-l-[60vw] border-revolver-400 fixed">
        {"<Jatin Arora/>"}
      </div>

      <nav className="w-full h-16 bg-revolver-100 fixed border-2 border-revolver-400 rounded-bl rounded-br">
        <a
          style={{ textShadow: "1px 1px #2e1e00" }}
          className="rounded-full h-20 w-20 p-3 bg-revolver-100 text-gold-300 flex justify-center items-center"
          href="/"
        >
          {"<Jatin Arora/>"}
        </a>
      </nav>
      <SectionRender
        className={
          "h-75vh w-full bg-revolver-700 flex justify-around snap-start pl-24 pr-24 pt-32 pb-32 flex-col"
        }
      >
        <div>
          <h1 className="text-7xl font-bold text-shadow-lg text-gold-50">
            Frontend Developer.
          </h1>
          <p className="text-gold-100">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
        </div>
      </SectionRender>
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
        <div>hello world</div>
      </SectionRender>
    </div>
  );
}

export default App;
