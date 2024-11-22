import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {

  app.put("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { courseId, userId } = req.params;
    const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });

  app.delete("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { courseId, userId } = req.params;
    const status = await enrollmentsDao.unenrollUserInCourse(userId, courseId);
    res.send(status);
  });

  app.get("/api/enrollments/", async (req, res) => {
    const enrollments = await enrollmentsDao.getEnrollments();
    res.json(enrollments);
  });
}
