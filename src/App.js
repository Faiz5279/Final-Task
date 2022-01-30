import Nav from './MyComponents/Nav'
import Responsivenav from './MyComponents/Responsivenav'
import Centerselectionzone from './MyComponents/Centerselectionzone'
import Backd from './MyComponents/Backd';
import Contentzone from './MyComponents/Contentzone'

function App() {
  return (
    <div className="App">
      <div id="webpage">
      <Nav />
      <Centerselectionzone />
      <Backd />
      <Contentzone />
      <Responsivenav />
      </div>
    </div>
  );
}

export default App;
