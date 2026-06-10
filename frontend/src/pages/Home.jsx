import Navbar from "../components/Navbar";
import CodeEditor from "../components/CodeEditor";
import InputPanel from "../components/InputPanel";
import OutputPanel from "../components/OutputPanel";
import StatusBar from "../components/StatusBar";

function Home() {
  return (
    <div className="h-screen bg-slate-950 flex flex-col">

      <Navbar />

      <div className="flex-1 flex">

        <div
          className="
          w-[70%]
          border-r
          border-slate-800"
        >
          <CodeEditor />
        </div>

        <div
          className="
          w-[30%]
          flex
          flex-col"
        >

          <div
            className="
            h-1/2
            border-b
            border-slate-800"
          >

            <div
              className="
              h-10
              bg-slate-900
              text-white
              px-4
              flex
              items-center"
            >
              INPUT
            </div>

            <div className="h-[calc(100%-40px)]">
              <InputPanel />
            </div>

          </div>

          <div className="h-1/2">

            <div
              className="
              h-10
              bg-slate-900
              text-white
              px-4
              flex
              items-center"
            >
              OUTPUT
            </div>

            <div className="h-[calc(100%-40px)]">
              <OutputPanel />
            </div>

          </div>

        </div>

      </div>

      <StatusBar />

    </div>
  );
}

export default Home;