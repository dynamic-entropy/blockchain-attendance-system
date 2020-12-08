# Blockchain-attendance-system
    A multiple class attendance system on the Blockchain.
  
# Technology Stack
    html,css
    react
    drizzle
    truffle
    solidity
    ganache
    web3
  
 # Prerequisite
    npm - v6.0.0+
    node - v14.0.0+
 
 * `git clone https://github.com/dynamic-entropy/blockchain-attendance-system.git` #clone the project
 * `cd blockchain-attendance-system` # move into project folder
 * `npm i` #to install all dependencies for development
 
 > 🙏 These commands may take a while, please be patient.
 
 # Terminal commands to launch the system
 * Run a truffle develop instance
    * `truffle develop` #starts a local development blockchain
 * In the truffle develop console type 
    * `migrate --reset` #to run migrations to deploy the contracts
 * (Optionally) run a test 
    * `test` #check if contract were deployed successfully
  * In a seperate instance/tab of terminal
    * `cd client-app` (move into client app, this was bootstrapped with create-react-app)
    * `npm start` (to start the client-app in development mode)
    
      
 # The DAPP
Every time you use Blockchain to store anything, you have to pay a gas fee. Hence, to reduce the cost paid in gas fee it is assumed that the institution will use a separate database to store the information of students in different classes. Here, we have used a hard coded Database as JSON objects for the same.

        A separate contract is written as well "BLC.sol" where the functionality of adding a class, student and then marking and saving their attendance is also implemented which can be used on Remix IDE but a separate front end is not designed for that contract (cuz money issues). 

* The teacher will be able to mark the attendance on the Blockchain of students present in the database.

![](images/Mark_Attendance.jpeg)

* Both teacher and student will be able to see the attendance which was stored on blockchain before.

![](images/View_Attendance.jpeg)


# BLC.sol
This system can directly be used on the Remix. The DB is dynamic and is stored on the Blockchain itself. The teacher can create a class, add students to already created class, mark their presence and retrieve the attendance as well (class wise as well as specific student wise)

Structures used

    Student structure : Contains id, name and presence of each student
    Attendance List structure: Contains id and presence on that day

Mappings used and their functionality

    ClassRollMap : Class -> Max Students #Keeps a track of total students in that class
    School : Class -> Student_id -> Student_info #The database which can be stored on the Blockchain containing info of all students
    allRecord : Class -> Date -> Student info array with presence #Maintains the attendance record of each class separately.
    studentRecord : Class -> Student_id -> AttendanceList array #Maintains the attendance record of each student separately.
        
Functions

    createClass : Create a new class.
    addStudent : Inputs the class name and add student to that class.
    MarkPresent : Inputs classs name and student_id to mark the presence of the given student.
    MarkAbsent : Inputs classs name and student_id to mark the absence of the given student.
    getRecord : Get the whole  record of a class after inputting class and date.
    getStudentRecord : Get the whole previous record of a student's attendance after inputting class and student_id.
    Percentage : Input the class and student_id, this function can calculate the percentage of classes attended by that student.
