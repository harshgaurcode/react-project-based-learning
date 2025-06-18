function Projects({ projects }) {
  let gitHub = "https://github.com/harshgaurcode";
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>
            <strong>{proj.title}</strong>: {proj.description}
          </li>
        ))}
      </ul>
      <p>Check out my projects below!</p>
      <p>
        <a href={gitHub}>Git Hub</a>
      </p>
      <p>Feel free to explore and provide feedback.</p>
      <p>Looking forward to your thoughts!</p>
    </section>
  );
}

export default Projects;
