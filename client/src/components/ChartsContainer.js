import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useAppContext } from '../context/appContext'
import '../assets/styles/chartsContainer.css'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useAppContext()
  return (
    <>
      <h4>Monthly Applications</h4>
      <div className='chartbtn'>
      <button  type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      </div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </>
  )
}

export default ChartsContainer
