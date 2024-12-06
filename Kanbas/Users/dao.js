import model from "./model.js";
import enrollmentsModel from "../Enrollments/model.js";

export const createUser = (user) => {
  delete user._id;
  return model.create(user);
};

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) =>
  model.findOne({ username: username });

export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export async function findUsersByRole(role, course) {
  const enrollments = await enrollmentsModel
    .find({ course: course })
    .populate("user");
  return enrollments
    .filter((enrollment) => enrollment.user.role === role)
    .map((enrollment) => enrollment.user);
}

export async function findUsersByPartialName(partialName, course) {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  const enrollments = await enrollmentsModel
    .find({ course: course })
    .populate("user");
  return enrollments
    .filter(
      (enrollment) =>
        regex.test(enrollment.user.firstName) ||
        regex.test(enrollment.user.lastName)
    )
    .map((enrollment) => enrollment.user);
}
