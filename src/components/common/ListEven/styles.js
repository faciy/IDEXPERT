import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    image:{
        width: '100%', 
        height: 100, 
        marginTop: 20, 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    imageCard:{
        width: '100%', 
        backgroundColor: '#1F4F4F', 
        height: 70, 
        justifyContent: 'space-around', 
        paddingLeft: 10, 
        flexDirection: 'row', 
        alignItems: 'center' 
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
    date:{
        textAlign:'center',
        color:'white',
    },
    infoText:{
        color:'white'
    },
    containeDate:{
        
    }
   

})