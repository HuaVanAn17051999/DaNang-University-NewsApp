import {Header} from 'react-native-elements';
import React from 'react';

const myTheme = () => {
  return (
    <Header
      // leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'TIN TỨC ', style: {color: '#fff'}}}
      // rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
};
export default myTheme;
