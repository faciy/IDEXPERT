import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    form:{
        margin:hp('1%'),
        right:wp('1%')
    },
    image:{
        width: wp('80%'),
        height: hp('10%') , 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    card:{
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: '#1F4F4F',
        flexDirection:'row' ,
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'), 
    },
    containerDate:{
        paddingLeft: 10, 
        alignSelf: 'center',

    },
    infoEven:{
       
    },
    bar:{
        height:hp('10%'),
        borderLeftWidth:1,
        left:10,
        borderColor:'white'
    },
    date:{
        textAlign:'center',
        color:'white',
    },
    button:{
        backgroundColor:'#08AAAA',
        top:-10,
        right:20,
        position:'absolute',
        borderRadius:30,
        paddingStart:10,
        paddingEnd:10
    },
    textButton:{
        textAlign:'center',
        color:'white',
        alignItems:'center'
    },
    infoEven:{
        padding:wp('2%')
    },
    infoText:{
        color:'white'
    },
   
    
   

})