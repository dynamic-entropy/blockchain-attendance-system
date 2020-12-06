import Attendance from "../contracts/Attendance.json";

export const options = {
  contracts: [Attendance],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};
