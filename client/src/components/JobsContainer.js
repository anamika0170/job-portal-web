import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Alert from './AlertDisplay';
import  '../assets/styles/jobsContainer.css';
import PageBtnContainer from './PageBtnContainer';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext();
  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <>
        <h2>No jobs to display...</h2>
      </>
    );
  }

  return (
    <Container sx={{marginTop:'50px'}}>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <Grid className='jobs' >
        {jobs.map((job) => {
          return <Grid item ><Job key={job._id} {...job} /></Grid>;
        })}
      </Grid>
      {numOfPages > 1 && <><PageBtnContainer /></>}
    </Container>
  );
};

export default JobsContainer;
