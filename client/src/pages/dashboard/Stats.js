import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import {Container} from '@mui/material'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <Container>
      <StatsContainer />
      {monthlyApplications.length > 0 && <><ChartsContainer /></>}
    </Container>
  )
}

export default Stats
