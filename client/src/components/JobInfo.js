import '../assets/styles/jobInfo.css'

const JobInfo = ({ icon, text }) => {
  return (
    <div className='wrapper'>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </div>
  )
}

export default JobInfo
