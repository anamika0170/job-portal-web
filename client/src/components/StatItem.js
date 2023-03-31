import { Card } from '@mui/material'
import  '../assets/styles/statItem.css'

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Card sx={{marginTop:'25px'}}>
      <article style={{color:color}}>
      <header className='header'>
        <div className={`count`}>{count}</div>
        <span style={{background:bcg}} className={`icon`}>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </article>
    </Card>
  )
}

export default StatsItem
