import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Navbar } from './src/modules/Navigation/components';
import { ItemProvider, ProjectProvider } from './src/modules/ToDo/contexts';
import { PaperProvider } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async() => {
      await Font.loadAsync({
        'IBMPlexSans': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
        'NotoSerif': require('./assets/fonts/NotoSerif-Regular.ttf'),
        'VictorMono': require('./assets/fonts/VictorMono-Regular.ttf')
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded){
    return (
      <View>
        <Text>The fonts have not loaded</Text>
      </View>
    )
  }
  


  return (
    // <View onLayout={handleOnLayout}>
      <ProjectProvider>
        <ItemProvider>
          <NavigationContainer>
            <PaperProvider>
              <Navbar/>
            </PaperProvider>
          </NavigationContainer>
        </ItemProvider>
      </ProjectProvider>
    // </View>
  );
}



export default App;