// Navigation Bar SECTION
const navBar = {
    show: true,
  };
  
  // Main Body SECTION
  const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Jatin",
    middleName: "",
    lastName: "Dholakia",
    message: "Welcome to my Website.",
    icons: [
      {
        name: "Github",
        image: "fab fa-github",
        url: "https://github.com/JatinDholakia/",
      },
      {
        name: "Linkedin",
        image: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/jatin-dholakia/",
      },
      {
        name: "Email",
        image:"fas fa-envelope",
        url: "mailto: dholakia98@gmail.com"
      },
      {
        name: "Twitter",
        image: "fab fa-twitter",
        url: "https://www.twitter.com/jatin_dholakia_/",
      },
      {
        name: "Medium",
        image:"fab fa-medium",
        url: "https://medium.com/@jatin.dholakia",
      },
    ],
    codeforces: "https://codeforces.com/profile/jatin_dholakia",
    leetcode: "https://leetcode.com/jatin_dholakia"
  };
  
  // ABOUT SECTION
  // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username
  //      i.e:profilePictureLink:"johnDoe123",
  //b) a link to an hosted image
  //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
  //c) image in "editable-stuff" directory and use require("") to import here,
  //      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
  //d) If you do not want any picture to be displayed, just leave it empty :)
  //      i.e: profilePictureLink: "",
  // For Resume either provide link to your resume or import from "editable-stuff" directory
  //     i.e resume: require("../editable-stuff/resume.pdf"),
  //         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",
  
  const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/jatin.jpg"),
    imageSize: 375,
    message:
      "Hello! I'm Jatin Dholakia, I currently work as a Senior Software Engineer at Enphase Energy. I graduated with a Bachelor's Degree from IIT Gandhinagar in 2020. I have experience in building and scaling backend microservices. Feel free to reach out to know more about me.",
    resume: require("../editable-stuff/Jatin-Dholakia.pdf"),
  };
  
  // PROJECTS SECTION
  // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
  //      i.e: reposLength: 0,
  // If you want to display specfic projects, add the repository names,
  //      i.e ["repository-1", "repo-2"]
  const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "jatinDholakia", //i.e."johnDoe12Gh"
    reposLength: 0,
    specificRepos: ["home", "SentEmojiBot", "Codeforces", "Spelling-Correction"],
  };
  
  // Leadership SECTION
  const leadership = {
    show: false,
    heading: "Leadership",
    message:
      "Write message here.",
    images: [
      { 
        img: require("../editable-stuff/jatin.jpg"), 
        label: "First slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
      { 
        img: require("../editable-stuff/jatin.jpg"), 
        label: "Second slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
    ],
    imageSize: {
      width:"615",
      height:"450"
    }
  };
  const skills = {
      show:true,
      heading: "Skills",
      programming: [
          "Java",
          "C++",
          "Python"
      ],
      frameworks: [
          "Spring",
          "REST",
          "PyTorch",
          "Tensorflow"
      ],
      tools: [
          "Git",
          "MySQL",
          "PostgreSQL"
      ],
      miscellaneous: [
          "AWS",
          "Google Cloud",
          "Microservices"
      ],
      technologies: [
          "AWS",
          "Spring",
          "MongoDB",
          "Redis",
          "MySQL"
      ]
  };
  // GET IN TOUCH SECTION
  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      `"If I had asked people what they wanted, they would have said faster horses."`,
    writer: "- Henry Ford",
    email: "dholakia98@gmail.com",
  };
  
  // Blog SECTION
  // const blog = {
  //   show: false,
  // };
  
  export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
  