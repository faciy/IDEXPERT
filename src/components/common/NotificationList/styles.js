import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        width: wp('80%'),
        // height:hp('3%'),
        // backgroundColor:'red'
    },
    card: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap'
    },
    cardOne: {
        backgroundColor: '#1F4F4F',
        width:wp('35%'),
        // height:hp('5%'),
        padding:wp('5%'),
        margin:hp('1%'),
        borderTopLeftRadius:20
    },
    cardTwo: {
        backgroundColor: '#1F4F4F',
        width:wp('35%'),
        // height:hp('5%'),
        padding:wp('5%'),
        margin:hp('1%'),
        borderTopRightRadius:20
    },
    cardThree: {
        backgroundColor: '#1F4F4F',
        width:wp('35%'),
        // height:hp('5%'),
        padding:wp('5%'),
        margin:hp('1%'),
        // borderTopRightRadius:20
    },
    cardNine: {
        backgroundColor: '#1F4F4F',
        width:wp('35%'),
        // height:hp('5%'),
        padding:wp('5%'),
        margin:hp('1%'),
        borderBottomLeftRadius:20
    },
    cardTen: {
        backgroundColor: '#1F4F4F',
        width:wp('35%'),
        // height:hp('5%'),
        padding:wp('5%'),
        margin:hp('1%'),
        borderBottomRightRadius:20
    },
    bar:{
        borderBottomWidth:1,
        borderBottomColor:'white',
        marginStart:wp('-5%'),
        marginEnd:wp('-5%')
    },
    text:{
        textAlign:'center',
        color:'white'
    },
    containerSujet:{
        marginTop:10,
        paddingHorizontal:wp('0%')
    },
    
})