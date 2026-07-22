import "./Skills.css";
import SkillItem from "./SkillItem";

import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import tailwind from "./images/tailwind.png";

import git from "./images/git.png";
import github from "./images/github.png";
import vscode from "./images/vscode.png";
import figma from "./images/figma.png";

import node from "./images/node.png";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";
import ai from "./images/ai.png";

const Skills = () => {
    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                {/* Heading */}
                <div className="skills-heading">
                    <h2>My <span>Skills</span></h2>
                    <div className="heading-line"></div>
                </div>

                {/* Cards */}
                <div className="skills-grid">

                    {/* Frontend */}
                    <div className="skill-card">
                        <h3>Frontend</h3>

                        <div className="skills-list">

                            {/* Skill Item */}
                            <div className="skills-list">
                                <SkillItem icon={html} name="HTML5" />
                                <SkillItem icon={css} name="CSS3" />
                                <SkillItem icon={js} name="JavaScript" />
                                <SkillItem icon={react} name="React" />
                                <SkillItem icon={tailwind} name="Tailwind" />
                            </div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="skill-card">
                        <h3>Tools</h3>

                        <div className="skills-list">
                            <div className="skills-list">
                                <SkillItem icon={git} name="Git" />
                                <SkillItem icon={github} name="GitHub" />
                                <SkillItem icon={vscode} name="VS Code" />
                                <SkillItem icon={figma} name="Figma" />
                            </div>
                        </div>
                    </div>

                    {/* Learning */}
                    <div className="skill-card">
                        <h3>Learning</h3>

                        <div className="skills-list">
                            <div className="skills-list">
                                <SkillItem icon={node} name="Node.js" />
                                <SkillItem icon={express} name="Express" />
                                <SkillItem icon={mongodb} name="MongoDB" />
                                <SkillItem icon={ai} name="AI APIs" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Skills;