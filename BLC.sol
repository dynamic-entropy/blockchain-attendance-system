pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Attendance{
    struct Student{
        uint unique_id;
        string Name;
        bool presence;
    }
    Student stud1;
    
    struct AttendanceList{
        uint date;
        bool present;
    }
    
    mapping(uint=>mapping(uint=>Student)) public School;
    mapping(uint=>uint) public ClassRollMap;
    mapping(uint=>mapping(uint=>Student[])) public allRecord;
    mapping(uint=>mapping(uint=>AttendanceList[])) public studentRecord;
    
    Student[] student;
    AttendanceList[] attendanceList;
    
    uint NewRoll = 0;
    
    function createClass(uint _class) public{
        ClassRollMap[_class] = 0;
    }
    
    function addStudent(uint _class,string memory _name) public{
        NewRoll = ++ClassRollMap[_class];
        School[_class][NewRoll] = Student(NewRoll,_name,false);
    }
    
    function MarkPresent(uint _class,uint _id,uint _date) public{
        stud1 = School[_class][_id];
        stud1.presence = true;
        student = allRecord[_class][_date];
        student.push(stud1);
        allRecord[_class][_date] = student;
        
        attendanceList = studentRecord[_class][_id];
        attendanceList.push(AttendanceList(_date,true));
        studentRecord[_class][_id] = attendanceList;
    }
    
    function MarkAbsent(uint _class,uint _id,uint _date) public{
        stud1 = School[_class][_id];
        stud1.presence = false;
        student = allRecord[_class][_date];
        student.push(stud1);
        allRecord[_class][_date] = student;
        
        attendanceList = studentRecord[_class][_id];
        attendanceList.push(AttendanceList(_date,false));
        studentRecord[_class][_id] = attendanceList;
    }
    
    function getRecord(uint _class,uint _date) public view returns(Student[] memory){
        return allRecord[_class][_date];
    }
    
    function getStudentRecord(uint _class,uint _id) public view returns(AttendanceList[] memory){
        return studentRecord[_class][_id];
    }
    
    function Percentage(uint _class,uint _id) public returns(uint){
        attendanceList = studentRecord[_class][_id];
        uint count = 0;
        for(uint i=0;i<attendanceList.length;i++){
            if(attendanceList[i].present==true){
                count++;
            }
        }
        return (count/attendanceList.length);
    }
}