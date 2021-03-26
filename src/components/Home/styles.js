import {
    StyleSheet,Dimensions
} from 'react-native';
import { SIZES } from '../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    notification:{
        width:30,
        height:30,
        tintColor:'white'
    },
      modal:{
          height:400,
          width: SIZES.width -100,
          paddingTop:20,
          backgroundColor:'white',
          borderRadius:10,
          alignItems:'center',
          top:100
      },
      textView:{
          flex:1,
          alignItems:'center'
      },
      textMail:{
        flexDirection:'row',
        marginTop:20,
        right:30
      },
      touchableOpacity:{
          flex:1,
          alignItems:'center',
          paddingVertical:10,
          backgroundColor:'#000000AA'
      },
      btn: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
        backgroundColor: '#127171',
        borderRadius: 30,
        height: 50,

    },
    text: {
        color: 'white',
        fontSize: 18
    },
    background: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width,
        paddingHorizontal:20
    },
    
    menu:{
        width:30,
        height:30
    },
    name:{
        color:'white', 
        textAlign:'center',
        top:30
    },
    buttonView:{
        bottom:100
    },
    containerOther:{
        alignItems:'center',
        marginTop:20
    },
    green:{
        backgroundColor:'green',
        width:120,
        alignItems:'center',
        borderRadius:100,
        borderColor:'#0E787E', 
        borderBottomWidth:10,
        borderTopWidth:10, 
        borderRightWidth:10,
        borderLeftWidth:10,
    },
    photoOther:{
        backgroundColor:'red',
        height:100,
        width:100, 
        borderRadius:50, 
    },
    profilPhoto:{
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    iconMail:{
        marginRight:20, 
        alignSelf:'center'
    },
    bar:{
        borderBottomColor:'grey',
        borderBottomWidth:2,
        width:150,
        right:125,
        top:10  
    },
    logo:{
        width:40,
        height:40
    },
    deconnecter:{
        color:'white',
        left:100,
        textDecorationLine:'underline'
    },
    badge:{
        bottom:hp('5%'),
        left:hp('0%'),
        backgroundColor:'green'
    }
    
      
})