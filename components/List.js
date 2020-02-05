import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem';
import React, { useContext, useEffect, useState } from 'react';
import { MediaContext } from '../contexts/MediaContext';
import { getAllMedia } from '../hooks/Hook';


//const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';


const List = ({}) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data, loading] = getAllMedia();
  setMedia(data);

  return (
    <FlatList
      data={media}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      style= {styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },
});

export default List;
