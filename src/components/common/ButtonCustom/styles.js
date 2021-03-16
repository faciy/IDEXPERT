import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    btn: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
        backgroundColor: '#127171',
        borderRadius: 30,
        height: 50,
        marginStart: 20,
        marginEnd: 20

    },
    text: {
        color: 'white',
        fontSize: 18
    }

})