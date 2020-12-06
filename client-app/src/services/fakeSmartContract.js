import { Students } from "./fakeStudentDb";

let Attendance = {
  CSE2017: {
    "29/11/2020": [true, true, true, true, false],
    "30/11/2020": [false, true, false, false, true],
    "01/12/2020": [false, true, false, false, true],
  },
  MEC2018: {
    "29/11/2020": [false, true, true, true, false],
    "30/11/2020": [false, true, true, true, false],
    "01/12/2020": [true, true, true, true, true],
  },
  CVL2019: {
    "29/11/2020": [false, true, true, true, false],
    "30/11/2020": [false, true, true, true, false],
    "01/12/2020": [false, true, true, true, false],
  },
};

function getAttendance(batch, roll) {
  var index = Students[batch].filter((S) => S.roll === roll)[0].id;
  var attended = [];
  var value;
  Object.keys(Attendance[batch]).forEach(function (key) {
    value = Attendance[batch][key];
    attended.push(value[index - 1]);
  });
  return attended;
}

function getDatewiseAttendance(batch, date) {
  return Attendance[batch][date];
}

function getPercentage(attended) {
  var count = 0;
  for (var index = 0; index < attended.length; index++) {
    if (attended[index] === true) {
      count++;
    }
  }
  var percentage = (count / attended.length) * 100;
  return percentage;
}

export { getAttendance, getPercentage, getDatewiseAttendance };
