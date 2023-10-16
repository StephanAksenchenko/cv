const educationHistory = [
  {
    id: 1,
    start: new Date(2013, 8),
    end: new Date(2018, 6),
    university: "Saint Petersburg State Chemical and Pharmaceutical University",
    degree: "bachelor",
    department: "chemical technology",
  },
  {
    id: 2,
    start: new Date(2018, 8),
    end: new Date(2020, 2),
    university: "Saint Petersburg State Chemical and Pharmaceutical University",
    degree: "master",
    department: "economics and management of the Pharmaceutical industry",
  },
];

export default educationHistory;
export type EducationHistory = typeof educationHistory;
