import React from 'react';
import main from '../assets/images/main1.svg';
import  '../assets/styles/landingPage.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {Logo} from '../components';
import { Button, Container, Typography } from '@mui/material';


const LandingPage = () => {
  const navigate = useNavigate()
  const redirectPage=()=>{
   navigate('/register')
  }
  return (
    <Container>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <Typography paragraph sx={{color:'#4a4b4f'}}>
            <Typography component={'h3'}>Create job for job seekers & grow your career</Typography>
              I'm Anamika Rajput and here you can create many jobs for jobs seeker and grow your career with our Application,
              here you can create job , Edit and Delete jobs also saw your overall performance on basis of monthly activities.
            </Typography>
            <Button sx={{marginTop:'20px'}} fullWidth  className='img main-img btn' onClick={redirectPage}>SignIn</Button>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Container>
  );
};

export default LandingPage;