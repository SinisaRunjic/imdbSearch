import { Typography } from '@material-ui/core'
import {FC} from 'react'

const DisplayText:FC= ({children}) => {
  return (
    <Typography component='p' variant='body2' color='primary' >
        {children}
    </Typography>
  )
}


export default DisplayText
