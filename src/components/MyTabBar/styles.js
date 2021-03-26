import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    touchableOpacity:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50,
        backgroundColor:'#1F4F4F',
        position:'absolute',
        left:SIZES.width/2 -25,
        bottom:30,
        // top:-20,
        borderRadius:30,
        zIndex:99,
    },
    touchableOpacityTwo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:56,
    },
    image:{
        width:20,
        height:20,
        tintColor:'white'  
    },
    homeBack:{
        backgroundColor:'#127171',
        height:35,
        width:35,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper:{
        // position:'absolute',
        // bottom:hp('-5%'),
        // width:SIZES.width,
        // // height:SIZES.height,
        // // backgroundColor:'red',
        // alignItems:'center',
        // justifyContent:'center'
        borderRadius:50,
    },
    container:{
        flexDirection:'row',
    }
})