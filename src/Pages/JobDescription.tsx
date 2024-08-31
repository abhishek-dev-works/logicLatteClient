/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import jobData from "../mocks/jobs.json";
const useStyles = makeStyles()({
  wrapper: {
    margin: "20px",
    padding: 30,
    backgroundColor: "#F8F9FA",
    borderRadius: "1em",
    textAlign: "justify",
    height: "calc(100vh - 190px)",
    overflow: 'scroll',
    maxWidth:'80rem',
  },
  title: {
    fontSize: "x-large",
    fontWeight: 600,
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 125,
    height: 127,
    borderRadius: "1em",
  },
  items: {
    margin: "90px 20em",
  },
  apply: {
    width: 80,
    height: 30,
    padding: '1em',
    borderRadius: '0.2em',
    textDecoration: 'none',
    backgroundColor: '#4895EF',
    color: '#fefefe'
  }
});

interface IJobDescriptionProps {
  id: any;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  apply: string;
  date: string;
  experience: string;
  logo: string;
  salary: string;
}

const LineBreak = () => (
  <div
    style={{
      width: "90%",
      height: 2,
      backgroundColor: "black",
      margin: "5px auto",
    }}
  ></div>
);
const JobDescription = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  const [details, setDetails] = React.useState<IJobDescriptionProps>();
  React.useEffect(() => {
    const job = jobData.find((job) => job?.id == parseInt(id || "0"));
    setDetails(job);
  }, [id]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.flex} style={{justifyContent: 'space-around'}}>
        <div
          className={classes.logo}
          style={{ backgroundImage: `url(${details?.logo})` }}
        ></div>
        <div>
          <h1>{details?.title}</h1>
          <div className={classes.flex}>
            <h4>{details?.company}</h4>
            <h4>{details?.location}</h4>
          </div>
          <div className={classes.flex}>
            <h4>{details?.type}</h4>
            <h4>{details?.salary}</h4>
          </div>
        </div>
      </div>
      <LineBreak />
      <div className={classes.items}>
        <h3>Job Description</h3>
        <p>{details?.description}</p>
      </div>
      <LineBreak />
      <div className={classes.items}>
        <h3>Requirements</h3>
        <ul>
          {details?.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      <LineBreak />
      <div className={classes.items}>
        <h3>Responsibilities</h3>
        <ul>
          {details?.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <LineBreak />
      <div className={classes.items}>
        <a href={details?.apply} className={classes.apply} target="_blank" rel="noreferrer">Apply</a>
      </div>
    </div>
  );
};

export default JobDescription;
