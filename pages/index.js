import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

import { data as GithuData } from "../data";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Gurpreet Singh",
          description: "A passionate Full Stack Web Developer.",
          image: `${githubProfileData.avatar_url}`,
          url: "https://stirring-tarsier-759195.netlify.app",
          keywords: [
            "Gurpreet",
            "Gurpreet Singh",
            "@singhguri",
            "preeet_saab",
            "classysingh.666",
            "Portfolio",
            "Gurpreet's Portfolio ",
            "Gurpreet Singh's Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "android developer",
            "django",
            "flask",
            "django rest framework",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  // console.log(.bio);
  const githubProfileData = GithuData;
  //   await fetch(
  //     `https://api.github.com/users/${openSource.githubUserName}`
  //   ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
