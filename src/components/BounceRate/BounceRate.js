import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentBounceRateLayout: {
    width: '90%',
    height: 80,
    marginLeft:'auto',
    marginRight: 'auto',
  },
  iconHoverContainer: {
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    width:'50px',
    height:'50px',
  },
  topLayer: {
      marginTop:15,
      display: 'flex',
      flexDirention: 'row',
      justifyContent: 'space-between',
  },
  circleDot: {
      width:12,
      height:12,
      marginTop:4,
      borderRadius:6,
  },
  numberText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
  },
  bracketText: {
    fontSize: 11,
    marginLeft:6,
  },
  statusText: {
      color: '#c2c2c9',
      fontSize:11,
      marginLeft:6,
  },
  middleLayer: {
      marginTop:10
  },
  BounceRateTitle: {
      fontSize:14,
      color:'#5057ac',
      fontWeight: 'bold'
  }
  
}))

function BounceRate({dotColor, bottomBorderPresent, statusText, bracketText }) {
    const [isShown, setIsShown] = useState(false);
    const classes = useStyles();

    const bottomBorder = bottomBorderPresent == true || bottomBorderPresent == undefined
    ? '1px solid #f2f5f6' : '';

    const signDecorator = (numberVal) => {
        if(Math.sign(numberVal) == -1){
            return "#ff6767"
        }
        else {
            return "#5ad76e"
        }
    }
  
    return (
        <div className={classes.parentBounceRateLayout} style={{borderBottom:bottomBorder}}>
            <div className={classes.topLayer}>
               <div><span className={classes.BounceRateTitle}>Bounce Rate</span></div>
               <div className={classes.circleDot} style={{backgroundColor: dotColor}}></div>
            </div>
            <div className={classes.middleLayer}>
               <span className={classes.numberText}>13,000</span> 
               <span className={classes.bracketText} style={{color:signDecorator(bracketText)}}>({bracketText}%)</span> 
               <span className={classes.statusText}>{statusText}</span>
            </div>
           
        </div>
    )
}

export default BounceRate;
