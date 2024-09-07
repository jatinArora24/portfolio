import "./App.css";
import SectionRender from "./components/sectionRender";
//
function App() {
  return (
    <div className="overflow-y-auto snap-y snap-mandatory scroll-smooth h-screen w-full">
      <SectionRender
        className={
          "h-75vh w-full bg-revolver-200 flex justify-center snap-start"
        }
      >
        <a className="underline" href="/">
          {"<Jatin Arora/>"}
        </a>
        <div>
          <h1 className="text-3xl font-bold">Frontend Developer.</h1>
          <p>
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
        </div>
      </SectionRender>
      <SectionRender
        className={
          "h-75vh w-full bg-revolver-900 flex justify-center snap-start"
        }
      >
        <div>hello world</div>
      </SectionRender>
    </div>
  );
}

export default App;
