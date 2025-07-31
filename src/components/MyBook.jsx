import HTMLFlipBook from "react-pageflip";
import Page from "./Page.jsx";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import coverBackImg from "../assets/coverback.png";
import SpaceImg1 from "../assets/project1.jpg";
import FoodImg2 from "../assets/project2.jpg";
import EmsImg5 from "../assets/ems1.png";
import BTImg7 from "../assets/project4.png";
import CMSImg8 from "../assets/cms1.png";
import APTImg9 from "../assets/apt1.png";
import BKImg10 from "../assets/bk1.png";
import DRImg11 from "../assets/dr1.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Work from "./pages/Work/Work";
import Academics from "./pages/Academics/Academics";
import { useEffect, useState } from "react";

const ProjectData = [
  {
    name: "Code Master v2",
    description:
      "A complete learning platform built with MERN stack. Features include authentication, user dashboards, protected routes, and interactive coding content.",
    image: CMSImg8,
    previewLink: "https://codemster.com/",
  },
  {
    name: "Apna Tutorial v1",
    description:
      "A beginner-friendly MERN-based tutorial website with topic-wise structured content, user authentication, and responsive design.",
    image: APTImg9,
    previewLink: "https://apna-tutorial.vercel.app/",
  },
];

const ProjectData2 = [
  {
    name: "Book Store",
    description:
      "A modern online bookstore built with MERN stack allowing users to browse, protected route, and user token based access.",
    image: BKImg10,
    previewLink: "https://syed-book-store.vercel.app/",
  },
  {
    name: "Prescripto",
    description:
      "A doctor appointment system built with the MERN stack where users can book appointments and admins can manage doctor profiles.",
    image: DRImg11,
    previewLink: "https://doctor-frontend-psi.vercel.app/",
  },
];

const ProjectData3 = [
  {
    name: "Employee Management",
    description:
      "A frontend-only project using local storage to manage employee data — add, edit, delete, and categorize employees by task status.",
    image: EmsImg5,
    previewLink: "https://syed-employee-management-system.vercel.app/",
  },
  {
    name: "Bait-Al-Tahzeeb",
    description:
      "A live MERN-based website built for a client, featuring a beautiful layout, and content-driven dynamic pages.",
    image: BTImg7,
    previewLink: "https://baitaltahzeeb.com/",
  },
];

const ProjectData4 = [
  {
    name: "Food Ordering",
    description:
      "A clean and responsive static food ordering UI with category filters, item cards, and mobile-friendly layout.",
    image: FoodImg2,
    previewLink: "https://food-ordering-ed4o.onrender.com/",
  },
  {
    name: "Space World",
    description:
      "A visually engaging space-themed landing page with animations, responsive design, and a modern aesthetic.",
    image: SpaceImg1,
    previewLink: "https://sfyspace.netlify.app/",
  },
];

function MyBook(props) {
  const [bookSize, setBookSize] = useState({
    width: 600,
    height: 500,
    scale: 0.95,
  });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setBookSize({ width: 400, height: 500, scale: 0.8 });
      } else {
        setBookSize({ width: 600, height: 740, scale: 0.85 });
      }
    };

    updateSize(); // set initial size
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex justify-center w-full md:justify-items-end">
      <HTMLFlipBook
        width={bookSize.width}
        height={bookSize.height}
        showCover="true"
        style={{
          transform: `scale(${bookSize.scale})`, // ✅ Zoom out to 75% size
          transformOrigin: "center", // ✅ Keep it centered
        }}
        className="text-sharp"
      >
        <Page number={1}>
          <Cover coverImg={coverImg} title="Welcome to Syed's 3D Portfolio" />
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
          <Projects ProjectData={ProjectData3} />
        </Page>
        <Page number={9}>
          <Projects ProjectData={ProjectData4} />
        </Page>
        <Page number={10}>
          <Work />
        </Page>
        <Page number={11}>
          <Academics />
        </Page>
        <Page number={12}>
          <Cover coverImg={coverBackImg} title="Thanks" />
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
