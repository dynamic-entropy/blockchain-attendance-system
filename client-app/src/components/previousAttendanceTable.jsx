import React, { Component } from "react";
import { getStudents } from "../services/fakeStudentDb";

class PreviousAttendanceTable extends Component {
  state = { students: [] };

  componentDidMount() {
    const { selectedClass } = this.props;
    const students = getStudents(selectedClass.name);
    this.setState({ students });
  }

  render() {
    const { selectedClass, columns, attendanceList } = this.props;
    const students = getStudents(selectedClass.name);

    return !attendanceList ? (
      <h1>Us din toh chutti tha :) </h1>
    ) : (
      <React.Fragment>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {columns.map((column) => (
                <th key={column.id}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{`${s.fname} ${s.lname}`}</td>
                <td>{s.rollNumber}</td>
                <td>
                  <button
                    className={
                      attendanceList[s.id]
                        ? "btn btn-outline-success"
                        : "btn btn-outline-danger"
                    }
                  >
                    {attendanceList[s.id] ? "P" : "A"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default PreviousAttendanceTable;
