const careerHistory = [
  {
    id: 1,
    company: "Mygento eCommerce Solutions",
    start: new Date(2019, 10),
    end: new Date(2023, 9),
    position: "front-end developer",
    intro: "As Front-end developer at Mygento eCommerce Solutions",
    options: [
      {
        id: 1,
        text: "Support and Development: I was responsible for actively participating in",
      },
      {
        id: 2,
        text: "Code Refactoring and Optimization: I consistently worked on improving the quality",
      },
      {
        id: 3,
        text: "Mentoring and Training: I took on the role of mentoring junior developers",
      },
      {
        id: 4,
        text: "Client Communication: I established and maintained effective communication with clients",
      },
    ],
  },
  {
    id: 2,
    company: "Nevafilm",
    start: new Date(2019, 2),
    end: new Date(2019, 7),
    position: "back-end developer",
    intro:
      "During my tenure at Nevafilm, I took on the role of developing a system designed to streamline the generation of documentation and contracts.",
    options: [
      {
        id: 1,
        text: "I led the design and development of a robust and user-friendly system for generating documentation and contracts.",
      },
    ],
  },
];

export default careerHistory;
export type CategoryHistory = typeof careerHistory;
