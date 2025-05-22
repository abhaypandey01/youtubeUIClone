
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleVideoPage from './pages/SingleVideoPage';
import ChannelDashboard from './pages/ChannelDashboard';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/video/:id' element={<SingleVideoPage />} />
      <Route path='/channel' element={<ChannelDashboard />}/>
    </Routes>
  )
}

export default App;