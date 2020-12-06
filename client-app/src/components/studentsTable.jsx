import React, { Component } from "react";
import { getStudents } from "../services/fakeStudentDb";

class StudentsTable extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    const { selectedClass } = this.props;
    const students = getStudents(selectedClass.name);
    this.setState({ students });
  }

  render() {
    const { selectedClass, columns, attendanceList } = this.props;
    const students = getStudents(selectedClass.name);

    return (
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
                <td>{s.fname}</td>
                <td>{s.lname}</td>
                <td>{s.rollNumber}</td>
                <td>
                  <button
                    className={
                      attendanceList[s.id]
                        ? "btn btn-success"
                        : "btn btn-danger"
                    }
                    onClick={() => this.props.onToggle(s)}
                  >
                    {attendanceList[s.id] ? "Present" : "Absent"}
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

export default StudentsTable;
