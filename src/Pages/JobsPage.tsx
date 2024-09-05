import React from "react";
import JobsData from "../mocks/jobs.json";
import JobsCard from "../Components/Common/JobsCard";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  wrapper: {
    margin: "20px",
    paddingBottom: 10,
    height: "calc(100vh - 140px)",
    overflowY: "scroll",
    width: "80rem",
  },
  title: {
    fontSize: "x-large",
    fontWeight: 600,
  },
});
const JobsPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      {JobsData.map((job) => (
        <div key={job.id}>
          <JobsCard
            id={job.id}
            title={job.title}
            description={job.description}
            location={job.location}
            salary={job.salary}
            company={job.company}
            experience={job.experience}
            logo={job.logo}
          />
        </div>
      ))}
    </div>
  );
};

export default JobsPage;
