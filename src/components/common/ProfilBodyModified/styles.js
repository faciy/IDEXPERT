import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    container:{
        height:SIZES.height /1.8,
        backgroundColor:'white',
        marginTop:20,
        marginHorizontal:20,
        borderRadius:20,
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginTop:10
    },
    profil:{
        width:100,
        height:100,
        backgroundColor:'green',
        alignSelf:'center',
        marginTop:30,
        borderRadius:50,
        borderColor:'grey',
        borderWidth:2
    },
    textProfil:{
        marginRight:180
    },
    bar:{
        borderBottomWidth:2,
        borderBottomColor:'black'
    },
    info:{
        marginTop:20,
    },
    textInput:{
        marginTop:-40,
        right:25,
        top:10
    },
    text:{
        color:'grey',
        paddingHorizontal:20,
        top:5
    },
    input:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#b3b3b3',
        borderBottomWidth:1,
        marginRight:20,
        marginLeft:20
    },
})