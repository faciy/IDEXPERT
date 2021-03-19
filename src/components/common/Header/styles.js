import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop:30,
        height:100,
        borderRadius:20,
        backgroundColor: '#127171',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    name:{
        marginLeft:20
    },
    photoContainer:{
        marginRight:20,
        height:60,
        width:60,
        borderRadius:40,
        borderColor:'grey',
        borderWidth:2
    },
    text:{
        color:'white'
    }

})