// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import LibraryScreen from './screens/Library';
import PlayerScreen from './screens/Player';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              Search: 'search',
              Library: 'library',
              Player: 'play-circle'
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Player" component={PlayerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
>npm install react-native-vector-icons ; npx react-native link react-native-vector-icons ; cd android ; ./gradlew clean ; cd .. ; npx react-native run-android ; npx react-native run-ios
>cd Ionicons; npm install; cd .. ; npx react-native run-android ; npx react-native run-ios ;