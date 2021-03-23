import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    bg:{
        backgroundColor:'#0E787E',
        height:hp('100%')
    },
    photo:{
        alignItems:'center',
        justifyContent:'center', 
        marginTop:hp('5'),
    },
    image:{
        width:wp('30%'),
        height:hp('15%'),
        borderRadius:wp('30%'),
        borderColor:'grey',
        borderWidth:1
    },
    name:{
        alignItems:'center',
        marginTop:hp('2%')
    },
    testName:{
        color:'white'
    },
    drawerElement:{
        marginTop:20
    }
})