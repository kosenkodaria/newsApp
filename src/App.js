import  Container  from 'react-bootstrap/Container';
import './App.scss';
import Header from './Header';
import Body from './Body';
import ErrorModal from './ErrorModal';



function App() {
  

  return (<Container>
    <Header />
    <Body />
    <ErrorModal/>
  </Container>);
}
export default App;
