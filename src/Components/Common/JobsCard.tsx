import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

interface IJobsCardProps {
  id: any;
  title: string;
  description: string;
  location: string;
  salary: string;
  company: string;
  experience: string;
  logo: string;
}

const useStyles = makeStyles()({
  wrapper: {
    display: "flex",
    margin: "20px",
    width: "50vw",
    backgroundColor: "#F8F9FA",
    border: "1px solid #DEE2E6",
    borderRadius: "1em",
    padding: "10px",
    boxShadow: "2px 3px #ADB5BD",
    height: "300px",
    textAlign: "left",
    cursor: "pointer",
  },
  title: {
    fontSize: "x-large",
    fontWeight: 600,
  },
  details: {
    width: "80%",
    textAlign: "left",
    margin: "5px 15px",
  },
  description: {
    fontWeight: "250",
    height: "104px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "20px",
  },
  subDetails: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "flex-start",
  },
});
const JobsCard = ({
  id,
  title,
  description,
  location,
  salary,
  company,
  experience,
  logo,
}: IJobsCardProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/jobs/${id}`);
  };
  return (
    <div className={classes.wrapper} onClick={handleClick}>
      <div
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          height: 90,
          width: 90,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      ></div>
      <div className={classes.details}>
        <h3>{title}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.subDetails}>
          <p>{location}</p>
          <p>{experience}</p>
        </div>
        <div className={classes.subDetails}>
          <p>{company}</p>
          <p>{salary}</p>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
