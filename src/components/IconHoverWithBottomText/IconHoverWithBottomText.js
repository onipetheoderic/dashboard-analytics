import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentIconHoverWithBottomTextLayout: {
    alignItems:'center',
    display: 'flex',
    flexDirection:'column',
    marginLeft:'auto',
    marginTop:20,
    marginRight:'auto',
    alignSelf:'center',
  
  },
  iconHoverContainer: {
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    width:'50px',
    height:'50px',
  },
  IconHoverWithBottomTextTextStyle: {
      marginTop:5,
      fontSize:10,
      textTransform:'capitalize'
  }
 
  
}))

function IconHoverWithBottomText({icon, title}) {
    const [isShown, setIsShown] = useState(false);
    const classes = useStyles();
    const hoverColors = () => {
        return isShown===false ? {textColor:'#dcddee', iconColorBg: "#5057ac", fontWeight: '400',} : {textColor:'white', iconColorBg: "#02d7ff", fontWeight: '700'}
    }
  
    return (
        <div 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} 
        className={classes.parentIconHoverWithBottomTextLayout}>
            <div className={classes.iconHoverContainer} 
            style={{backgroundColor:hoverColors().iconColorBg}}>
                {icon}
            </div>
            <p className={classes.IconHoverWithBottomTextTextStyle} style={{color:hoverColors().textColor, fontWeight:hoverColors().fontWeight}}>{title}</p>
        </div>
    )
}

export default IconHoverWithBottomText;
