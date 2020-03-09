import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'

const Home = (props) => {
    // console.log('Home', props);
    const { navigation } = props;
    return (
        // <List navigation={navigation} mode={'all'}></List>
      <View><Text>
        Hello
      </Text></View>
    );
};

Home.propTypes = {
    navigation: PropTypes.object,
};

export default Home;
