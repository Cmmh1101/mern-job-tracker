import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  await res.send("delete job");
};

const getAllJobs = async (req, res) => {
  await res.send("get all jobs");
};

const updateJob = async (req, res) => {
  await res.send("update job");
};

const showStats = async (req, res) => {
  await res.send("Show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
