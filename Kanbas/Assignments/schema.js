import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentModel" },
    points: Number,
    availableDateTime: Date,
    dueDateTime: Date,
    untilDateTime: Date,
    description: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
