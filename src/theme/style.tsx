import { StyleSheet } from "react-native";
import COLORS from "./theme/color";
import { scaleHeight, scaleWidth,normalize } from "./utilities/dimentions";
import DeviceInfo from "react-native-device-info";
const isTablet = DeviceInfo.isTablet();
export default StyleSheet.create({ 
  iconLogo:{
    height:scaleHeight(isTablet?35:20),
    resizeMode:'contain',
    width:scaleHeight(isTablet?40:25),
    marginRight:10
  },
  SectionBox:{
    paddingVertical:scaleHeight(20),
    borderBottomColor:COLORS.WHITE,

    borderBottomWidth:.5,
    paddingHorizontal:10
  },
  centerItem:{
   justifyContent:'center'
  },
  textCenter:{
    textAlign:'center'
  },
   button:{
      borderColor:COLORS.LIGHT_PRIMARY,
      borderWidth:1,
      borderRadius:2,
      alignContent:'center',
      alignItems:'center',
      paddingVertical:scaleHeight(10),
      paddingHorizontal:10
   },
   buttonSave:{
    borderColor:COLORS.LIGHT_PRIMARY,
    borderWidth:1,
    borderRadius:2,
    alignContent:'center',
    alignItems:'center',
    paddingVertical:scaleHeight(10),
    paddingHorizontal:10,
    height:normalize(50)
 },
   buttonTxt:{
    
      color:COLORS.LIGHT_PRIMARY,
      justifyContent:'center'
   },
   borderRadius8:{
    borderRadius:8
   },
   Blackbutton:{
    borderColor:COLORS.BLACK,
    borderWidth:1,
    borderRadius:1,
    alignContent:'center',
    alignItems:'center',
    paddingVertical:scaleHeight(10),
    paddingHorizontal:10
  },
   BlackbuttonTxt:{
      color:COLORS.BLACK,
      justifyContent:'center'
   },
   row:{
    flexDirection:'row'
   },
   column:{
    flexDirection:'column'
   },
   between: {
  justifyContent:"space-between"
   },
   contentBetween:{
   flexDirection:"row",
   justifyContent:"space-between"
   },
   contant:{
    flex:1
   },
   shadowBox:{
    // borderWidth:.3,
    borderRadius:10,
    backgroundColor:"#FAFAFA",
      // Common shadow styles for both iOS and Android
      shadowColor: '#000',
      shadowOffset: {
        width: -2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      // Specific to Android
      elevation: 5,
   },
   tableLayout:{
    paddingHorizontal:10,
    paddingVertical:scaleHeight(20),
   },
   primaryLayout:{
     backgroundColor:COLORS.LIGHT_PRIMARY
   },
   whiteLayout:{
    backgroundColor:COLORS.WHITE
  },
   primaryText:{
    color:COLORS.LIGHT_PRIMARY
  },
  grayText:{
    color:COLORS.GREY
  },
  whiteText:{
    color:COLORS.WHITE
  },
  mtb10:{
    marginVertical:scaleHeight(10)
   },
  mt10:{
    marginTop:10
   },
   mt0:{
    marginTop:0
   },
   mt20:{
    marginTop:scaleHeight(20)
   },
   mt30:{
    marginTop:scaleHeight(30)
   },
   mt40:{
    marginTop:scaleHeight(50)
   },
   mH20:{
    marginHorizontal:20
   },
   mH40:{
    marginHorizontal:40
   },
   mH10:{
    marginHorizontal:10
   },
   mr10:{
    marginRight:10
   },
   mr30:{
    marginRight:30
   },
   pH10:{
    paddingHorizontal:10
   },
   pH20:{
    paddingHorizontal:20
   },
   pV10:{
    paddingVertical:scaleHeight(5)
   },
   pV20:{
    paddingVertical:scaleHeight(10)
   },
   pt20:{
    paddingTop:scaleHeight(20)
   }, 
   pb20:{
    paddingBottom:scaleHeight(20)
   },
   boldTxt:{
     fontWeight:'bold'
   },
   font12:{
    fontSize:12,
    fontFamily:'Roboto-Regular',
    color:COLORS.BLACK
  },
   font14:{
     fontSize:14,
     fontFamily:'Roboto-Regular',
     color:COLORS.BLACK
   },
   font16:{
    fontSize:16,
    fontFamily:'Roboto-Regular',
    color:COLORS.BLACK
   },
   font18:{
    fontSize:18,
    fontFamily:'Roboto-Regular',
    color:COLORS.BLACK
   },
   font20:{
    fontSize:20,
    fontFamily:'Roboto-Regular',
    color:COLORS.BLACK
   },
   font24:{
    fontSize:24,
    fontFamily:'Roboto-Regular',
    color:COLORS.BLACK
   },
   greenDot:{
    width:normalize(8),
    height:normalize(8),
    borderRadius:100,
    backgroundColor:'green',
    marginRight:5
   }
});