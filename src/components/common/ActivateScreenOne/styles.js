import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    container: {
       flex:1,
       justifyContent:'center',
       alignItems:'center' ,
       marginBottom:-350
    },
    background:{
        backgroundColor: 'white',
        width:SIZES.width - 80,
        height:SIZES.height - 200,
        borderRadius:20,
        alignItems:'center',
        opacity: 0.60,
    },
    texts:{
        marginTop:50,
        alignItems:'center',
    },
    otherText:{
        marginTop:31,
        alignItems:'center'
    },
    TextVerificate:{
        textAlign:'center',
        fontWeight:'bold'
    },
    enoughText:{
        alignItems:'center',
        marginTop:15,
        paddingHorizontal:20,
    },

})