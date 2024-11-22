import Database from "../Database/index.js";
const { enrollments } = Database;

export function enrollUserInCourse(userId, courseId) {
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
  enrollments.filter((enrollment) => {
    enrollment.user !== userId || enrollment.course !== courseId;
  });
}

export function getEnrollments() {
  return enrollments;
}
