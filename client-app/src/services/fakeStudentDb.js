let Students = {
  CSE2017: [
    {
      id: "0",
      rollNumber: "17001C203",
      fname: "Fname",
      lname: "Lname",
      class: "CSE2017",
    },
    {
      id: "1",
      rollNumber: "17001C203",
      fname: "Ramesh",
      lname: "Kumar",
      class: "CSE2017",
    },
    {
      id: "2",
      rollNumber: "17002C203",
      fname: "Divyanshu",
      lname: "Goyal",
      class: "CSE2017",
    },
    {
      id: "3",
      rollNumber: "17003C203",
      fname: "Lebron",
      lname: "James",
      class: "CSE2017",
    },
    {
      id: "4",
      rollNumber: "17004C203",
      fname: "Suresh",
      lname: "Singh",
      class: "CSE2017",
    },
    {
      id: "5",
      rollNumber: "17005C203",
      fname: "Sameer",
      lname: "Singhal",
      class: "CSE2017",
    },
  ],
  MEC2018: [
    {
      id: "0",
      rollNumber: "17001C203",
      fname: "Fname",
      lname: "Lname",
      class: "CSE2017",
    },
    {
      id: "1",
      rollNumber: "17011C204",
      fname: "Rajesh",
      lname: "Kumar",
      class: "CSE2018",
    },
    {
      id: "2",
      rollNumber: "17012C204",
      fname: "Divy",
      lname: "Goyal",
      class: "CSE2018",
    },
    {
      id: "3",
      rollNumber: "17013C204",
      fname: "Rohit",
      lname: "Swarup",
      class: "CSE2018",
    },
    {
      id: "4",
      rollNumber: "17014C204",
      fname: "Philip",
      lname: "Singh",
      class: "CSE2018",
    },
    {
      id: "5",
      rollNumber: "17015C204",
      fname: "Vineet",
      lname: "Govil",
      class: "CSE2018",
    },
  ],
  CVL2019: [
    {
      id: "0",
      rollNumber: "17001C203",
      fname: "Fname",
      lname: "Lname",
      class: "CSE2017",
    },
    {
      id: "1",
      rollNumber: "17011C204",
      fname: "Amar",
      lname: "Kumar",
      class: "CSE2018",
    },
    {
      id: "2",
      rollNumber: "17012C204",
      fname: "Akbar",
      lname: "Goyal",
      class: "CSE2018",
    },
    {
      id: "3",
      rollNumber: "17013C204",
      fname: "Anthony",
      lname: "Swarup",
      class: "CSE2018",
    },
    {
      id: "4",
      rollNumber: "17014C204",
      fname: "Philip",
      lname: "Singh",
      class: "CSE2018",
    },
    {
      id: "5",
      rollNumber: "17015C204",
      fname: "Vineet",
      lname: "Govil",
      class: "CSE2018",
    },
  ],
};

function getDetails(batch, rollNumber) {
  return Students[batch].filter((S) => S.rollNumber === rollNumber)[0];
}

function getStudents(batch) {
  return Students[batch] ? Students[batch] : [];
}

function getClassLen(batch) {
  return getStudents(batch).length;
}
export { getDetails };
export { getStudents };
export { Students };
export { getClassLen };
