import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/Projects";

function App() {
  const projectList = [
    { title: "Weather App", description: "Search & display weather info" },
    { title: "Todo App", description: "Manage your tasks offline" },
  ];

  return (
    <div>
      <Header />
      <Skills />
      <Projects projects={projectList} />
    </div>
  );
}

export default App;
