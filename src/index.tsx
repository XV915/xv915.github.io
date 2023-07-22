import {AppRegistry, Platform} from 'react-native';
import App from './app';

// export function App(): ReactElement {
//   return <Navigation />;
// }

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
