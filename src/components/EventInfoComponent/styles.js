import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    header: {
        backgroundColor: '#1F4F4F',
        width: SIZES.width,
        paddingHorizontal:20
    },
    menu: {
        width: 30,
        height: 30
    },
    text:{
        color: 'white',
        textAlign:'center' ,
        bottom:10
    },
    containerBody:{
        backgroundColor:'#215D5D',
        height: hp('100%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%')
    },
    body:{
        marginTop: 30,
        height: hp('65%'),
        borderRadius: 20,
        backgroundColor: '#A6DBDB',
        padding:wp('5%'),
    },
    img:{
        width:40,
        height:40,
        alignSelf:'center'
    }
})