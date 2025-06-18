import { useState } from "react";

function Skills() {
  const [show, setShow] = useState(false);
  const skills = ["React", ".NET", "Firebase", "Redis"];

  const [shows, showDiv] = useState(false);

  return (
    <div>
      <h2>Skills</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Skills" : "Show Skills"}
      </button>
      {show && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}

      <button onClick={() => showDiv(!shows)}>
        {shows ? "Show Div" : "Hide Div"}
      </button>
      {shows && (
        <div>
          <p>This is a div that can be shown or hidden.</p>
        </div>
      )}
    </div>
  );
}

export default Skills;
