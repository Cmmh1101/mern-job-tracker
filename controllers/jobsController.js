const createJob = async (req, res) => {
  await res.send("create job");
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
