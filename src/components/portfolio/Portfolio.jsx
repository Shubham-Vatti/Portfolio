import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ImmunizeBuddy",
    img: "/imbuddy.png",
    desc: "Introducing the Newborn Vaccine Tracker, a comprehensive tool designed to support parents in safeguarding their child's health journey. This innovative app offers a user-friendly interface, providing access to personalized vaccine schedules, reminders for upcoming immunizations, and integration with nearby pediatricians for quick consultations. Additionally, it offers detailed descriptions of each vaccine, empowering parents with essential knowledge.",
    Gitlink:'https://github.com/Shubham-Vatti/ImmunizeBuddy-Frontend'
  },
  {
    id: 2,
    title: "AutoFleetHub",
    img: "/auto.png",
    desc: "AutoFleetHub is a revolutionary lorry booking app streamlining logistics. It connects shippers with reliable trucking companies, optimizing freight management. Users input cargo details and preferred routes, receiving instant quotes from vetted carriers. The app ensures transparency, displaying real-time tracking, delivery updates, and electronic proof of delivery. Its intuitive interface allows for seamless scheduling, reducing administrative burdens",
    Gitlink:'https://github.com/Shubham-Vatti/AutoFleetHub/tree/Android'
  },
  {
    id: 3,
    title: "Dash Drinks",
    img: "/Liqu.png",
    desc: "DashDrinks is a convenient liquor booking app that revolutionizes how users shop for alcohol. With a sleek interface and extensive database, users can browse, select, and order their favorite drinks seamlessly. The app offers personalized recommendations based on taste preferences and occasion. Integrated geolocation ensures swift delivery or pickup options from nearby stores. Users can track orders in real-time and receive exclusive deals.",
    Gitlink:'https://github.com/Shubham-Vatti/DashDrinks-Frontend'
  },
  {
    id: 4,
    title: "ImmunizeBuddy-Backend",
    img: "/backend.jpg",
    desc: "The backend of the vaccine tracker app employs Google OAuth for user authentication. It utilizes MongoDB for data storage and creates RESTful APIs for seamless communication, facilitating secure access to vaccination data and management functionalities.",
  },
  {
    id: 5,
    title: "AutoFleetHub-Backend",
    img: "/bbackend.jpg",
    desc: "The backend of the Lorry booking app utilizes JWT for authentication, featuring email-based login/register functionality. MongoDB stores data. REST API endpoints are created for seamless communication, ensuring efficient management of bookings and user interactions.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={()=>window.location.href=item?.Gitlink}>See Project</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
