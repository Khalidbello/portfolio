import styles from "./projects.module.css";
import Project from "./Project.js";

const datas = [
  {
    name: "BotSub",
    description:
      "A vtu site thats make airtime and data purchase easy. Integrated with facebook chat bot to enable users buy data even on freemode.",
    pages: [
      {
        sectionName: "Hero Section",
        imageUrl:
          "https://portfolio.khalidbello.repl.co/images/botsub/hero.jpg",
        liveUrl: "https://botsub.khalidbello.repl.co/#hero",
      },
      {
        sectionName: "Desktop View",
        imageUrl: "images/botsub/desktop.png",
        liveUrl: "https://botsub.khalidbello.repl.co/",
      },
      {
        sectionName: "Buy Data",
        imageUrl: "images/botsub/buy-data.jpg",
        liveUrl: "https://botsub.khalidbello.repl.co/buy-data",
      },
      {
        sectionName: "Admin",
        imageUrl: "images/botsub/admin.png",
        liveUrl: "htttps://botsub.khalidbello.repl.co/retry-failed-deliveries",
      },
      {
        sectionName: "Reviews",
        imageUrl: "images/botsub/customer-reviews.png",
        liveUrl: "htttps://botsub.khalidbello.repl.co/#reviews",
      },
      {
        sectionName: "Data Pricing",
        imageUrl: "images/botsub/data-pricing.png",
        liveUrl: "htttps://botsub.khalidbello.repl.co/data-pricing",
      },
    ],
  },
  {
    name: "AcedBukites",
    description:
      "An e-learning platform made with bukites in mind. Note: project is currently under development.",
    pages: [
      {
        sectionName: "No started courses component",
        imageUrl: "images/aced-bukites/start-course.png",
        liveUrl: "https://acedbukites.repl.co/#start-course",
      },
      {
        sectionName: "Continue Last Component",
        imageUrl: "images/aced-bukites/continue-last.png",
        liveUrl: "https://acedbukites.repl.co/#start-course",
      },
      {
        sectionName: "Answear PQ Component",
        imageUrl: "images/aced-bukites/answear-pq.png",
        liveUrl: "https://acedbukites.repl.co/#start-course",
      },
      {
        sectionName: "My Courses Component",
        imageUrl: "images/aced-bukites/my-courses.png",
        liveUrl: "https://acedbukites.repl.co/#my-courses",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className={`${styles.projects} mb-35`}>
      <h2 className="font-size-24 ml-11 mb-19">My Projects</h2>
      {datas.map((ele, index) => (
        <Project key={index} data={ele} />
      ))}
    </div>
  );
};

export default Projects;
