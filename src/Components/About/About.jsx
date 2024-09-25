import React from "react";
import "./About.scss";
import Skills from "../Skills/Skills";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const shownMonths = 9;
    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <section className="About" id="about">
      <div className="About__container">
        <h2 className="About__title">About Me</h2>
        <p className="About__description">
          I am a{" "}
          <strong style={{ color: "#F25F25" }}>
            <i>dedicated</i>
          </strong>{" "}
          Software Engineer specializing in full-stack web development. My
          commitment to{" "}
          <strong style={{ color: "#F25F25" }}>
            <i>continuous learning</i>
          </strong>{" "}
          keeps me updated with the latest industry trends and best practices. I
          enjoy solving coding challenges and currently have over 6000 points on{" "}
          <strong>
            <a
              href="https://pursuit.codetrack.dev/fellow/592"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeTrack
            </a>
          </strong>
          .
        </p>
        <p className="About__description">
          I love{" "}
          <strong style={{ color: "#F25F25" }}>
            <i>web development</i>
          </strong>{" "}
          and enjoy creating projects that address real-world problems. Outside
          of coding, I have a keen interest in trying new foods and cooking,
          which fuels my{" "}
          <strong style={{ color: "#F25F25" }}>
            <i>creativity</i>
          </strong>
          . I also enjoy solving sudoku puzzles and reading in my spare time.
        </p>
        <p className="About__articles"></p>
        <h2>Articles I've Written</h2>
        <ul>
          <li>
            <a
              href="https://medium.com/@wisdomwright-martin/keeping-it-toasty-how-i-used-toasts-to-fix-a-cohort-selection-bug-in-codetrack-c6c8402ad7c4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keeping it Toasty: How I Used Toasts to Fix a Cohort Selection Bug
              in CodeTrack
            </a>
          </li>
        </ul>
        <h2>Coding Contributions This Year</h2>
        <GitHubCalendar
          style={{
            display: "flex",
            width: "auto",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#F6F6F4",
            color: "orange",
          }}
          username="Wwright91"
          blockSize={16}
          blockMargin={3}
          blockRadius={9}
          colorScheme="light"
          transformData={selectLastHalfYear}
          fontSize={14}
          theme={{
            light: ["hsl(0, 0%, 90%)", "orange"],
            dark: ["hsl(0, 0%, 92%)", "orange"],
          }}
          labels={{
            totalCount: "{{count}} contributions this year",
          }}
          weekStart={1}
        />
        <br />
        <Skills />
      </div>
    </section>
  );
};

export default About;
