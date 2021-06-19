import logo from './logo.svg';
import './App.css';
import Page1 from './Components/StartFirebase/page1';
import Application from './Components/Authomication/Application';
import UserProvider from './Components/Providers/UserProvider';
import NotificationButton from './Components/Notifications/cllickNotification'
import { StyledDemo } from './Components/easyCrop/index'
import Try from './Components/selectExample/example'
import LocationSearchInput from './Components/selectExample/googlePlacesExample'
import Example from './Components/modal/modalTry'
function App() {
  return (
    <div className="Appnmggg">
      היי,
      ממצב איתך?
      אין עלינו!!!!!!!!!!!!
      מגניב שהצלחנו.......
      חסר לך ולא נצליח חחחחח
      טוב חייבת לסיים
      <UserProvider>
        <Application></Application>
      </UserProvider>
      <NotificationButton></NotificationButton>
      <Try></Try>
      <LocationSearchInput />
      <Example />
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-8'>
            <StyledDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
