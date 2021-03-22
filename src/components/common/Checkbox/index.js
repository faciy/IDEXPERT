import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const Checkbox = ({
    value,
    onValueChange
}) => {
    return (

        <View >
            <CheckBox
                tintColors={{ true: 'white', false: 'white' }}
                disabled={false}
                value={value}
                onValueChange={onValueChange}
            />
        </View>
    )
}

export default Checkbox;
