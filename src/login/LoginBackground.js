import React from 'react';
import {View, ImageBackground} from 'react-native';

const LoginBackground = ({ kalana }) => {
  return (
    <View>
<ImageBackground source={require("../../assets/images/gym.jpg")} style={{ height: '100%' }} />
<View style= {{ position: "absolute" }}>
    {kalana}
</View>
    </View>
  );
}

export default LoginBackground;