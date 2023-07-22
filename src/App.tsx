import { Navigation } from "./Navigation";

export type StackParams = {
  Home: JSX.Element | undefined;
  LocalCloud: JSX.Element | undefined;
  LoginApp: JSX.Element | undefined;
};

const App = () => {
  return <Navigation />;
};

export default App;
