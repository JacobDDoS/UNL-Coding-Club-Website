export class Subclub {
  image: string;
  title: string;
  officer: string;
  description: string;

  constructor(image : string, title : string, officer : string, description : string) {
    this.image = image;
    this.title = title;
    this.officer = officer;
    this.description = description;
  }
}

export const existingSubclubs = [
  new Subclub("/CmP_photo", "Competitive Programming", "Jacob Dimmitt", "Focused on solving programming problems, we use all sorts of data structures and algorithms to solve problems efficiently and within the expected time and space complexity."),
  new Subclub("/Photo_of_Ali", "Personal Projects", "Ali Shlaibah", "Personal Projects focuses on building up projects for resume, lab, or anything else. We meet once a week to discuss our progress on our projects and then we set goals going forward. ")
]
