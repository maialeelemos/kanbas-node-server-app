import model from "./model.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export function findAllCourses() {
  return model.find();
}

export function findCoursesForEnrolledUser(userId) {
  const enrollments = enrollmentsDao.getEnrollments();
  const { courses } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}

export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates ); // { $set: courseUpdates })
}
