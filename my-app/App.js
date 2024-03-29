import { StyleSheet, StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { colors} from './src/Global/colors';
import { fonts } from './src/Global/fonts';
import { store } from './src/App/store'
import { Provider }  from 'react-redux'
import MainNavigator from './src/Navigation/MainNavigator';
import { init } from './src/database';

init()
  .then(()=>console.log('DB Initialized'))
  .catch(err=>console.log(err))


export default function App() {

  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.yellow1} barStyle='default' />
      <Provider store={store}>
        <MainNavigator/> 
        
      </Provider>
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
