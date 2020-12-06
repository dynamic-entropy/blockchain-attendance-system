const Attendance = artifacts.require("./Attendance.sol");

contract("Attendance", (accounts) => {
  describe("Attendance Contract", () => {
    it("should store the attedanceList provided", async () => {
      const attendance = await Attendance.deployed();
      await attendance.setAttendance(
        "CSE2017",
        "03/12/2020",
        [true, false, true, false, false],
        { from: accounts[0] }
      );

      const storedList = await attendance.getAttendance.call(
        "CSE2017",
        "03/12/2020"
      );

      console.log(storedList);
      assert.equal(
        JSON.stringify(storedList),
        JSON.stringify([true, false, true, false, false]),
        "Unable to store list"
      );
    });

    it("should store the attedanceList provided", async () => {
      const attendance = await Attendance.deployed();
      await attendance.setAttendance(
        "CSE2017",
        "03/12/2020",
        [true, false, true, false, false],
        { from: accounts[0] }
      );

      const storedList = await attendance.getAttendance.call(
        "CSE2018",
        "03/12/2020"
      );

      console.log(storedList);
      assert.equal(
        JSON.stringify(storedList),
        JSON.stringify([]),
        "Unable to store list"
      );
    });
  });
});
