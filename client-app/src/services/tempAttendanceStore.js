import { getClassLen } from "./fakeStudentDb";

let attendance_list = [];

function updateList(idx) {
  attendance_list[idx] = !attendance_list[idx];
}

function getList() {
  return attendance_list;
}

function done(batch) {
  const len = getClassLen(batch.name);
  attendance_list = [];

  for (let i = 0; i < len; i++) {
    attendance_list[i] = false;
  }
}

export { getList, done, updateList };
