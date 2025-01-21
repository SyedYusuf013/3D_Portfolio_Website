import HTMLFlipBook from "react-pageflip";
import Page from "./page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import coverBackImg from "../assets/coverback.png";
import ProjectImg1 from "../assets/project1.jpg";
import ProjectImg2 from "../assets/project2.jpg";
import ProjectImg3 from "../assets/project3.jpg";
import ProjectImg4 from "../assets/project4.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Work from "./pages/Work/Work";
import Academics from "./pages/Academics/Academics";

const ProjectData = [
  {
    name: "Space Website",
    description: "Complete Responsive Website",
    image: ProjectImg1,
    previewLink: "https://sfyspace.netlify.app/",
  },
  {
    name: "Food Ordering Website",
    description: "Complete Responsive Website",
    image: ProjectImg2,
    previewLink: "completed",
  },
];

const ProjectData2 = [
  {
    name: "Employee Management System",
    description: "Fully functional frontend Complete Responsive Website",
    image: ProjectImg3,
    previewLink: "ongoing",
  },
  {
    name: "Bait-Al-Tahzeeb",
    description: "Live Project of frelancing",
    image: ProjectImg4,
    previewLink: "https://baitaltahzeeb.com/",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Work />
      </Page>
      <Page number={9}>
        <Academics />
      </Page>
      <Page number={10}>
        <Cover coverImg={coverBackImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
