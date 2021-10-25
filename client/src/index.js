import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';

// trustedTypes.createPolicy('default', {
//     createScriptURL: (input) => {
//       if (new URL(input).origin === 'https://js.stripe.com') {
//         return input;
//       }
//       return undefined;
//     }
//   });

ReactDOM.render(
  <CookiesProvider>
    <App />, document.getElementById('root')
  </CookiesProvider>
);
