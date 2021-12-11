
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './App.css';
import IntroBar from './components/introBar/IntroBar';
import MainCard from './components/mainCard/MainCard';
import data from './components/dummy/dummyData'
import arch1 from './image/arch/arch1.png'
import arch2 from './image/arch/arch2.png'
import arch3 from './image/arch/arch3.png'
import arch4 from './image/arch/arch4.png'
import arch5 from './image/arch/arch5.png'
import arch6 from './image/arch/arch6.png'
import arch7 from './image/arch/arch7.png'
import arch8 from './image/arch/arch8.png'
import arch9 from './image/arch/arch9.png'
import arch10 from './image/arch/arch10.png'

function App() {
  
  const title1={
    "title":"Title 1 ",
    "categorty":["category1","category3","category3"],
    "description": "description of the title1, roman kushner",
  }
  const title2={
    "title":"Title 2 ",
    "categorty":["category4","category5"],
    "description": "description of the title2, roman kushner",
  }
  const title3={
    "title":"Title 3 ",
    "categorty":["category6","category7","category8"],
    "description": "description of the title3, roman kushner",
  }
  const title4={
    "title":"Title ",
    "icon":"icon",
    "categorty":["category9","category10"],
    "description": "description of the title4, roman kushner",
  }

 

 
 
  return (
    <div className="App">
      <IntroBar />
      <MainCard  title={title1} card1={arch1} card2={arch2} card3={arch3} />
      <MainCard  title={title2} card1={arch4} card2={arch5} />
      <MainCard  title={title3} card1={arch7} card2={arch9} card3={arch10} />
      <MainCard  title={title4} card1={arch1} card2={arch2} />

    </div>
  );
}

export default App;
