// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Attendance{
    mapping(string=>mapping(string=>string)) attendanceList ;
    
    function getAttendance(string calldata _class,string calldata _date) external view returns(string memory){
        return attendanceList[_class][_date];
    } 
    
    function setAttendance(string calldata _class,string calldata _date,string calldata _list) external{
        attendanceList[_class][_date] = _list;
    } 
}
