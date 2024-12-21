import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    Cognizant,
    PicToCart,
    PizzaApp,
    MovieSearch,
    QuizApp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  

  const experiences = [
    {
      title: "Jr. Software Developer",
      company_name: "Cognizant",
      icon: Cognizant,
      iconBg: "#383E56",
      date: "September 2020 - Till date",
      points: [
        "Creating and enhancing API as per business requirement.",
        "Played a key role in developing new features and enhancing existing code in a collaborative team.",
        "Increased code coverage through comprehensive testing, improving reliability and maintainability of the codebase.",
        "API Integration: Integrated APIs and third-party services, enhancing overall application functionality.",
        "Tech-Stack used: Java, SQL, REST API, Hibernate, Spring Boot, Microservices, Postman."
      ],
    },
    {
      title: "Software Engineer Trainee ",
      company_name: "Cognizant",
      icon: Cognizant,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Aug 2023",
      points: [
        "Business Understanding: Gained deep knowledge of business processes and project architecture, aligning technicalsolutions with organizational goals.",
        "Implemented backend business logic using spring boot and web services.",
        "Tech-Stack used: Java, SQL, REST API, Hibernate, Spring Boot, Microservices, Postman."
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer Intern ",
      company_name: "Cognizant",
      icon: Cognizant,
      iconBg: "#383E56",
      date: "Feb 2022 - Aug 2022",
      points: [
        "Gained experience in front-end and back-end development.",
        "Contributed to the development of an end-to-end application.",
        "Collaborated with a team to deliver a functional software solution.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pict To Cart",
      description:
        "Developed a responsive e-commerce app using React, Tailwind CSS, and Material UI, with state management via Redux, React Router for navigation, a scalable Java Spring Boot backend with JWT authentication, Razorpay integration for secure payments, and a complete user flow from registration to purchase confirmation.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Sprignboot",
          color: "green-text-gradient",
        },
        {
          name: "React Js",
          color: "pink-text-gradient",
        },
      ],
      image: PicToCart,
      source_code_link: "https://github.com/Sundram1812/PicToCart/tree/main/e-commerce-backend/PickToCart",
    },

    {
      name: "Movie Search List",
      description:
        "I developed a movie search and rating application using React.js, where users can search for movies, rate them, and add them to their personal watchlist. The app also displays detailed information about each movie, including IMDb ratings, plot summaries, and other key details smooth responsive user experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: MovieSearch,
      source_code_link: "https://imdb-user-review.netlify.app/",
    },

    {
      name: "React Quiz",
      description:
        "You have developed an interactive quiz application using React.js. The application features a built-in timer to track the duration for each quiz session, adding an element of urgency. Upon completing the quiz, the application calculates and displays the final score, providing instant feedback to the user.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: QuizApp,
      source_code_link: "https://react-quizes.netlify.app/",
    },


  ];
  
  export { services, technologies, experiences, testimonials, projects };