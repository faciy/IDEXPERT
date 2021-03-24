import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    listItem: {
        alignItems: 'center',
        borderBottomColor: '#FFFFFF64',
        borderBottomWidth: 2
    },
    container: {
        borderBottomColor: '#FFFFFF64',
        borderBottomWidth: 2, 
        marginLeft: 20, 
        marginRight: 20, 
        bottom: 20,
    },
    contain:{
        // paddingHorizontal:20,
    },
    accordion:{
        bottom: -18, 
        top:10,
        marginStart:20,
        marginEnd:-20,
        left: -20, 
    },
    item:{
        borderBottomColor:'#FFFFFF64',
        borderBottomWidth:2,
        // paddingHorizontal:20,
    },
    background: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },

})