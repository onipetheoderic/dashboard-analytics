import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentDayWeekMonthLayout: {
    border: '1px solid #f2f5f6',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: 200,
    marginTop:20,
    height:40,
    marginRight:20,
    borderRadius:20,
  },
  iconHoverContainer: {
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    width:'50px',
    height:'50px',
  },
  DayWeekMonthTextStyle: {
      marginTop:4,
      fontSize:11,
      textTransform:'capitalize'
  },
  singleItem: {
      fontSize:11
  },
  singleItemWithRightBorder: {
    display: 'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    height:'100%',
    borderRight: '1px solid #f2f5f6',
    flex:1
    
  },
  singleItemWithoutRightBorder: {
    display: 'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    height:'100%',
    flex:1
    
  },
  spanText: {
      fontSize:11,
      '&:hover': {
        color:'#50b5ff',
        cursor: 'pointer',
        fontWeight:'bold',
       
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:8,
    }, 
  }
 
  
}))

function DayWeekMonth({icon, title}) {
    const [isShown, setIsShown] = useState(false);
    const classes = useStyles();

    const hoverColors = () => {
        return isShown===false ? {textColor:'#dcddee', iconColorBg: "#5057ac", fontWeight: '400',} : {textColor:'white', iconColorBg: "#02d7ff", fontWeight: '700'}
    }
  
    return (
        <div className={classes.parentDayWeekMonthLayout}>
        <div className={classes.singleItemWithRightBorder}>
        <span className={classes.spanText}>Day</span>
        </div>
        <div className={classes.singleItemWithRightBorder}>
        <span className={classes.spanText}>Week</span>
        </div>
        <div className={classes.singleItemWithoutRightBorder}>
        <span className={classes.spanText}>Month</span>
        </div>
         
        </div>
    )
}

export default DayWeekMonth;
