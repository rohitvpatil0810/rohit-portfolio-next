export type Education = {
  school: string;
  degree: string;
  major?: string;
  grade?: string;
  location: string;
  duration: string;
};

const educationList: Education[] = [
  {
    school: "Pune Institue of Computer Technology",
    degree: "Bachelor of Engineering",
    major: "Computer Engineering",
    location: "Pune, India",
    grade: "CGPA - 9.36",
    duration: "2020 - 2024",
  },
  {
    school: "R.Y.K. Junior College of Science",
    degree: "HSC",
    major: "Science",
    location: "Nashik, India",
    grade: "Percentage - 85.54%",
    duration: "2018 - 2020",
  },
  {
    school: "Maratha Highschool",
    degree: "SSC",
    location: "Nashik, India",
    grade: "Percentage - 94.00%",
    duration: "2017 - 2018",
  },
];

export default educationList;
