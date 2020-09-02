import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2>Continuous Learning</h2>
      <p>
        Keeping a journal is important in almost any endeavor, but it's
        especially necessary as a programmer. When I first started teaching
        myself to code, I was overwhelmed by how much there was to learn. There
        were days when I figured out how to overcome some challenge, only to
        find myself scratching my head a few days later, trying to remember how
        I solved that problem. Having a journal to reference prevents this
        problem, not to mention that the simple act of writing something helps
        us commit it to memory.
      </p>
      <p>
        Another important reason to keep a journal as a programmer is to remind
        yourself how far you've come! That's right. One of the ways I overcame
        the feeling of being overwhelmed by how much there is to learn was to
        constantly remind myself how much I had learned already. It kept me on
        course and served as a reminder that this journey would move forward one
        step at a time.
      </p>
      <p>
        Try out the app! If you like the project, you can see more of my work{" "}
        <a href="https://www.davegentilli.com/" target="_blank">
          here.
        </a>
      </p>
    </div>
  );
};

export default About;
