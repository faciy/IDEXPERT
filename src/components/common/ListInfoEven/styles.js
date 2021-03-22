import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    image:{
        width: wp('80%'),
        height: hp('20%') , 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    card:{
        width: wp('80%'),
        height: hp('40%'),
        backgroundColor: '#1F4F4F',       
    },
    containerDate:{
        paddingLeft: 10, 
        alignItems: 'center' 
    },
    bar:{
        height:70,
        borderLeftWidth:1,
        left:20,
        borderColor:'white'
    },
    infoEven:{
        paddingLeft: 40, 
        paddingRight: 20, 
        paddingBottom: 15, 
        paddingTop: 20,
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
    text:{
        paddingLeft: 10, 
        color: 'white'   
    },
    iconText:{
        flexDirection:'row',
        marginTop:10
    },
    textColor:{
        color:'#155F9F'
    },
    infoText:{
        padding:wp('5%')
    }
    
   

})