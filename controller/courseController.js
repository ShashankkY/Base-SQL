const Course = require('../models/courses');
const Student = require('../models/students');
const addCourse = (req,res)=>{
    try{
        const {name} = req.body;
        const course = Course.create({'name':name});

        res.json(course);

    }catch(error){
        res.status(500).json({'error':error.messsage});
    }
}

const addStudentsToCourses = async (req,res)=>{
    //{
 //   }
    try{
        const {studentId,courseIds} = req.body;

        const student = await Student.findByPk(studentId);
        const course = await Course.findAll({
            where:{
                id:courseIds
            }
            

        })
        await student.addCourses(course);

        const updatedStudent = await Student.findByPk(studentId,{include:course});
        res.status(200).json(updatedStudent);
        
    }catch(error){

    }
}

module.exports = {
    addCourse,
    addStudentsToCourses
}