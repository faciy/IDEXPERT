import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    container:{
        height:200,
        backgroundColor:'#123D40',
        marginTop:20,
        marginHorizontal:20,
        borderRadius:20
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginTop:20
    },
    profil:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:20,
        borderRadius:50,
        borderColor:'grey',
        borderWidth:1
    },
    textProfil:{
        marginRight:150
    },
    img:{
        width:100,
        height:100,
        borderRadius:50
    },
    camera:{
        width:40,
        height:40,
        backgroundColor:'#1F4F4F',
        bottom:35,
        left:60,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
})