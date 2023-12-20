import { StyleSheet, StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { colors} from './src/Global/colors';
import { fonts } from './src/Global/fonts';

import Navigation from './src/Navigation/Navigation';

export default function App() {

  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded) return null

  return (
    <>
      <StatusBar
      backgroundColor={colors.yellow1}
      barStyle='default'
      />
     <Navigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    justifyContent: 'start',
  },
});
