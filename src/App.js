/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from  "./pages/HomePage"
import ScrollList from './pages/ListScroll'
import PostPage from './pages/PostPage'

const Stack = createStackNavigator();

const post = {
  keywords: ['Science', "Technology", "Movie", "Repairs", "Coffee", "Design", "Sports"],
  onlineCount: 3,
  peopleCount: 48,
  bookmarksCount: 15,
  title: "“Is the colonization of Mars real in the next 20 years?”",
  author: {
    name: "Artifiqa",
    photo: "https://html5css.ru/css/paris.jpg"
  },
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mattis massa. Integer rutrum odio lobortis tortor vestibulum pretium. Fusce consectetur tempus quam, nec facilisis eros rhoncus id. Donec vel lorem sed leo scelerisque tempus. Mauris rutrum sodales urna et feugiat. Integer euismod efficitur nisl blandit feugiat. Maecenas quis tortor a libero semper molestie. Aliquam viverra in metus in ornare. Praesent et laoreet massa. Proin auctor leo eu justo tempus sagittis. Maecenas rhoncus, enim quis ultrices finibus, ipsum enim posuere mauris, in sagittis arcu est ac mi. Nam a nisl sed magna tempus consequat. Pellentesque aliquam, quam vitae faucibus porta.",
  onFriendCallTap: () => {},
  onReTalkTap: () => {},
  onShareTap: () => {},
  onCardTap: () => {},
  fliendCallUsers: [
    {
      name: "Artifiqa",
      photo: "https://html5css.ru/css/paris.jpg"
    },
    {
      name: "Artifiqa",
      photo: "https://html5css.ru/css/paris.jpg"
    }
  ],
  reTalkUsers: [
    {
      name: "Artifiqa",
      photo: "https://html5css.ru/css/paris.jpg"
    },
  ],
  comments: [

  ]
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen 
          name="ScrollList" 
          options={{headerShown: false}}
        >
          {props => <ScrollList {...props} posts={[]} />}
        </Stack.Screen>

        <Stack.Screen 
          name="PostPage" 
          options={{headerShown: false}}
        >
          {props => <PostPage {...props} {...post}  />}
        </Stack.Screen>
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


