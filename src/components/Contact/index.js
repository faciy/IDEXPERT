import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import lock from '../../assets/icons/cloche.png';

const ContactComponent = () => {

    return (
    <List.Section title="Accordions">
      <List.Accordion
        title="choix du pays"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
      </List.Accordion>
    </List.Section>
  );
};


export default ContactComponent;
