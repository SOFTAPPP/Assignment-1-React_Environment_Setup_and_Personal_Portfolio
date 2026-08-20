import React from 'react';

const Skills = () => {
  const skills = ['Backend Development', 'API Development', 'Telemetrics', 'Hardware Integration', 'Node.js', 'Databases', 'Git', 'Problem Solving'];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
