export class Subclub {
  image: string;
  title: string;
  officer: string;
  officerImage: string;
  description: string;
  technologiesUsed: Array<String>;
  skillsLearned: Array<String>;
  meetingTime: string;

  constructor(image : string, title : string, officer : string, officerImage : string, description : string, technologiesUsed : Array<String>, skillsLearned : Array<String>, meetingTime : string) {
    this.image = image;
    this.title = title;
    this.officer = officer;
    this.officerImage = officerImage;
    this.description = description;
    this.technologiesUsed = technologiesUsed;
    this.skillsLearned = skillsLearned;
    this.meetingTime = meetingTime;
  }
}

export const existingSubclubs = [
  new Subclub("/CmP_photo", "Competitive Programming", "Jacob Dimmitt", "/example_headshot", "Focused on solving programming problems, we use all sorts of data structures and algorithms to solve problems efficiently and within the expected time and space complexity.", ["C++", "CodeForces"], ["Data Structures and Algorithms", "Complexity Analysis", "Algorithm Design"], "Friday 5-7pm"),
  new Subclub("/Photo_of_Ali", "Personal Projects", "Ali Shlaibah","", "Personal Projects focuses on building up projects for resume, lab, or anything else. We meet once a week to discuss our progress on our projects and then we set goals going forward. ", [], [], "")
]
