export const getTechStack = (company: string): Array<string> => {
  switch (company) {
    case "Flipkart":
      return [
        "React",
        "React Native",
        "Kubernetes",
        "Redis",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "GraphQL",
      ];
    case "Wednesday Solutions":
      return ["React", "PostgreSQL", "NodeJS", "AWS", "Cordova"];
    case "Microsoft":
      return ["Azure", "Markdown", "Chatbot", "AI"];
    case "GeeksforGeeks":
      return ["JavaScript", "Python", "HTML", "CSS"];
    default:
      return [];
  }
};

export const getExperienceData = () => {
  return [
    {
      timeline: "2022 - Present",
      role: "UI Engineer",
      company: "Flipkart",
      companyWebsite: "https://flipkart.com",
      responsibility:
        "As a UI Engineer at Flipkart, India's leading e-commerce platform, I design and develop user-friendly interfaces for customers using React, React Native, and Node.js. I collaborate with product managers, designers, and other engineers to deliver high-quality features and enhancements that improve the user experience and satisfaction.",
      projectLinks: [
        {
          name: "Seller Platform",
          link: "https://seller.flipkart.com/",
        },
        {
          name: "Flipkart Seller Hub app",
          link: "https://play.google.com/store/apps/details?id=com.flipkart.seller&hl=en_IN&gl=US&pli=1",
        },
      ],
    },
    {
      timeline: "2021 - 2022",
      role: "Software Engineer",
      company: "Wednesday Solutions",
      companyWebsite: "https://www.wednesday.is/",
      responsibility:
        "Delivered high-quality, robust and scalable production code for a diverse array of projects for clients",
    },
    {
      timeline: "2020 - 2021",
      role: "Student Ambassador",
      company: "Microsoft",
      companyWebsite: "https://www.microsoft.com/en-in",
      responsibility:
        "Created learning modules for the Microsoft Learn Platform aimed to help 35M+ users. Worked on creating case studies for the Azure Health Bot.",
      projectLinks: [
        {
          name: "Azure Health Bot case studies",
          link: "https://learn.microsoft.com/en-us/training/modules/health-bot-case-studies/",
        },
      ],
    },
    {
      timeline: "2020 - 2021",
      role: "Technical Content Writer",
      company: "GeeksforGeeks",
      companyWebsite: "https://www.geeksforgeeks.org/",
      responsibility:
        "Worked on creating several technical articles over the time. It was a great learning experience, have added some of the articles written by me below.",
      projectLinks: [
        {
          name: "Saving Dataframe as Gzip",
          link: "https://www.geeksforgeeks.org/how-to-save-pandas-dataframe-as-gzip-zip-file/",
        },
        {
          name: "script.aculo.us Installation",
          link: "https://www.geeksforgeeks.org/script-aculo-us-installation/",
        },
      ],
    },
  ];
};
