import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import "../assets/styles/job.css";
import JobInfo from "./JobInfo";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid spacing={2} >
        <Grid item xs={6} sx={{marginTop:'50px'}}>
          <Card sx={{boxShadow:'0 4px 5px -1px #0e7c86'}}>
            <CardHeader
              avatar={<Avatar aria-label="recipe" sx={{backgroundColor:'#2cb1bc',color:'white'}}>{company.charAt(0)}</Avatar>}
              action={
                <IconButton aria-label="settings">
                </IconButton>
              }
              
              title={<Box sx={{color:'black',fontSize:'18px'}}>{position}</Box>}
              subheader={company}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <div>
                  <div className="content-center">
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className={`status ${status}`}>{status}</div>
                  </div>
                </div>
              </Typography>
            </CardContent>
            <CardActionArea>
            <Button className="edit-btn"  variant="outlined" color="success">
               <Link
                 to="/add-job"
                 className="edit-link"
                 onClick={() => setEditJob(_id)}
               >
                 Edit
               </Link>
             </Button>
             <Button
               type="button"
               
              //  sx={{marginTop:'10px'}}
                className="delete-btn"
               variant="contained"
               color="error"
               onClick={() => deleteJob(_id)}
             >
               Delete
             </Button>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Job;
