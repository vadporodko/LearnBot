import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import MainPage from './src/MainPage';
import AdditionalFiles from './src/AdditionalFiles';
import Presentations from './src/Presentations';
import LessonFirst from './src/LessonFirst';
import LessonSecond from './src/LessonSecond';
import LessonThird from './src/LessonThird';
import LessonFourth from './src/LessonFourth';

const Stack = createStackNavigator();

async function loadFonts() {
  await Font.loadAsync({
    'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
  });
}

loadFonts();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      loadFonts().then(() => {
        setIsLoading(false);
      });
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/img/screensaver.png')} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="AdditionalFiles" component={AdditionalFiles} options={{ headerShown: false }} />
        <Stack.Screen name="Presentations" component={Presentations} options={{ headerShown: false }} />
        <Stack.Screen name="LessonFirst" component={LessonFirst} options={{ headerShown: false }} />
        <Stack.Screen name="LessonSecond" component={LessonSecond} options={{ headerShown: false }} />
        <Stack.Screen name="LessonThird" component={LessonThird} options={{ headerShown: false }} />
        <Stack.Screen name="LessonFourth" component={LessonFourth} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
